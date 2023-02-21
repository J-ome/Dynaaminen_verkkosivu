import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';


const URL = "http://localhost/mywebservice/"

function App() {

  const [message, setMessage] = useState("")
  const [origin, setOrigin] = useState("")
  useEffect(() => {
    axios.get(URL)
    .then((response) => {
      setMessage(response.data.message)
      setOrigin(response.data.origin)
    }).catch(error => {
      alert(error)
    })
  }, [])
  


  return (
    <div>
      <h3>Message from web-server</h3>
      <p>{message}</p>
      <p>Your address is {origin}</p>
    </div>
  );
}

export default App;
