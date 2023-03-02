import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

const URL = 'http://localhost/todo/index.php'

function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get(URL)
    .then((response) => {
      setTasks(response.data)
    }).catch(error => {
      alert(error);
    })
  }, [])
  

  return (
    <div className='container'>
      <ol>
        {tasks?.map(task => (
          <li key={task.id}>{task.description}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
