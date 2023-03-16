import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

const URL = 'http://localhost/todo/'


function App() {

  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [editTask, setEditTask] = useState(null);
  const [editDescription, setEditDescription] = useState("");



  useEffect(() => {
    axios.get(URL)
      .then((response) => {
        setTasks(response.data)
      }).catch(error => {
        alert(error.response ? error.response.data.error : error);
      })
  }, [])

  function save(e) {
    e.preventDefault();
    const json = JSON.stringify({ description: task })
    axios.post(URL + 'add.php', json, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        setTasks(tasks => [...tasks, response.data]);
        setTask('');
      }).catch(error => {
        alert(error.response.data.error)
      });
  }

  function remove(id) {
    const json = JSON.stringify({ id: id })
    axios.post(URL + "delete.php", json, {
      headers: {
        "Content-Type" : "application/json"
      }
    })
      .then((response) => {
        const newListWithoutRemoved = tasks.filter((item) => item.id !== id);
        setTasks(newListWithoutRemoved);
      }).catch(error => {
        alert(error.response ? error.response.data.error : error);
      });
  }

    function setEditedTask(task) {
      setEditTask(task);
      setEditDescription(task?.description);
    }

    function update(e) {
      e.preventDefault();
      const json = JSON.stringify({id:editTask.id,description:editDescription})
      axios.post(URL + "update.php",json,{
        headers: {
          "Content-Type" : "application/json"
        }
      })
      .then((repsonse) => {
        tasks[(tasks.findIndex(task => task.id === editTask.id))].description = editDescription;
        setTasks([...tasks]);
        setEditedTask(null);
      }).catch (error => {
        alert(error.response ? error.response.data.error : error);
      });
    }

  return (
    <div className='container'>
      <h3>To do list</h3>
      <form onSubmit={save}>
        <label>New Task</label>
        <input value={task} onChange={e => setTask(e.target.value)} />
        <button>Save</button>
      </form>
      <ol>
        {tasks?.map(task => (
          <li key={task.id}>{editTask?.id !== task.id && task.description
          }
            {editTask?.id === task.id &&
              <form onSubmit={update}>
                <input value={editDescription} onChange={e => setEditDescription(e.target.value)} />
                <button>Save</button>
                <button type='button' onClick={() => setEditedTask(null)}>Cancel</button>
              </form>
            }
            <a href='#' className='delete' onClick={() => remove(task.id)}>
              Delete
            </a>&nbsp;
            {editTask === null &&
              <a className='edit' onClick={() => setEditedTask(task)} href="#">Edit</a>
            }
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
