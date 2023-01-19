
import './App.css';
import { useState } from 'react';
//weight / (height * height)

function App() {
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
  const [bmi, setBmi] = useState(0)
  

  function countBmi(e) {
    e.preventDefault()
    setBmi(weight / (Math.pow(height,2)))
  }

  //value={height}
  //value={weight}
  return (
    <form onSubmit={countBmi}>
      <h3>Body mass index</h3>
      <div>
        <label >Height (m)</label>
        <input value={height} onChange={e => setHeight(e.target.value)} />
      </div>
      <div>
        <label >Weight (kg)</label>
        <input value={weight} onChange={e => setWeight(e.target.value)}/>
      </div>
      <div>
      <output>BMI: {bmi.toFixed(1)}</output>
      </div>
      <button>Calculate</button>
    </form>
  );
}

export default App;
