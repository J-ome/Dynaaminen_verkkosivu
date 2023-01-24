import { useState } from 'react';
import './App.css';

//Male: E = (879 + 10.2 * m) * k
//Female: E = (795 + 7.18 * m) * k

function App() {

  const [weight, setWeight] = useState(0)
  const [intensity, setIntensity] = useState(1.3)
  const [gender, setGender] = useState("male")
  const [result, setResult] = useState(0)


  function countCalories (e) {
    e.preventDefault()

    let calories = 0;
    
    if (gender === "male") {

      calories = (879 + 10.2 * weight) * intensity;
    } else {
      calories = (795 + 7.18 * weight) * intensity;
    }
      setResult(calories)
  }
  

  return (
  <>
    <h2>Calories!</h2>
    <form onSubmit={countCalories}>
      <div>
        <label>Weight</label>
        <input name='weight' type="number" step="1" class="weight" value={weight} onChange={e => setWeight(e.target.value)}/>
      </div>
      <div>
        <label>Intensity</label>
        <select name='intensity' value={intensity} onChange={e => setIntensity(e.target.value)}>
          <option value="1.3">Light</option>
          <option value="1.5">Usual</option>
          <option value="1.7">Moderate</option>
          <option value="2">Hard</option>
          <option value="2.2">Very Hard</option>
        </select>
      </div>
      <div>
        <label>Gender</label>
        <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)}/> <label>Male</label>
        <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)}/> <label>Female</label>
      </div>
    <div>
      <output>Calorie intake based on training intensity: {result.toFixed(0)} </output>
    </div>
      <button>Calculate</button>


    </form>
  </>
  );
}

export default App;
