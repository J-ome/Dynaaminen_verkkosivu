
import './App.css';
import { useState } from 'react';

//Upper = (220 – age) * 0.85
//Lower = (220 – age) * 0.65
function App() {
  const [age, setAge] = useState(0)
  const [maxHeartRate, setMaxHeartRate] = useState(0)
  const [minHeartRate, setMinHeartRate] = useState(0)

  function countHeartRate (e) {
    e.preventDefault()
    setMinHeartRate((220 - age) * 0.65)
    setMaxHeartRate((220 - age) * 0.85)
  }




  return (
    <form onSubmit={countHeartRate}>
      <label>Age</label>
      <input value={age} onChange={e => setAge(e.target.value)}/>

      <label>Hear rate limits</label>
      <output>{minHeartRate.toFixed(0)} - {maxHeartRate.toFixed(0)}</output>
      <button>Calculate</button>
    </form>
  );
}

export default App;
