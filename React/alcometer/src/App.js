
import { useState } from 'react';
import './App.css';

function App() {

  const [weight, setWeight] = useState(0)
  const [bottles, setBottles] = useState(1)
  const [time, setTime] = useState(1)
  const [gender, setGender] = useState("male")
  const [result, setResult] = useState(0)

  function alcoholLevel (e) {
    e.preventDefault()

    let alcLevel = 0
    let litres = bottles * 0.33
    let grams = litres * 8 * 4.5
    let burning = weight / 10
    let gramsLeft = grams - (burning * time)

    if (gender === "male") {
      alcLevel = gramsLeft / (weight * 0.7)
    } else {
      alcLevel = gramsLeft / (weight * 0.6)
    }
    setResult(alcLevel)
  }


  return (
    <>
      <h2>Count alcohol blood level</h2>
      <form onSubmit={alcoholLevel}>
        <div>
          <label>Weight (Kg)</label>
          <input name='weight' type="number" step="1" class="weight" value={weight} onChange={e => setWeight(e.target.value)} />
        </div>
        <div>
          <label>Bottles (0.33l)</label>
          <select name='bottles' value={bottles} onChange={e => setBottles(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div>
          <label>Time (Hours)</label>
          <select name='time' value={time} onChange={e => setTime(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div>
          <label>Gender</label>
          <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)} /> <label>Male</label>
          <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)} /> <label>Female</label>
        </div>
        <div>
          <output>Alcohol blood level: {result.toFixed(2)}% </output>
        </div>
        <button>Calculate</button>


      </form>


    </>
  );
}

export default App;
