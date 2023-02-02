import { useEffect, useState } from 'react';
import './App.css';


function App() {

  const [time, setTime] = useState(new Date())

  /* function updateTime () {
    setTime(new Date())
  } */
// => Anonyymi funktio
  useEffect(()=>{
    //const id = setInterval(updateTime, 1000)
    const id = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return() => {
      clearInterval(id)
    }
  }, [])

  return (
    <div style={{margin: "30px"}}>
      <p>Kello on: {time.toLocaleTimeString()}</p>
    </div>
  );
}

export default App;
