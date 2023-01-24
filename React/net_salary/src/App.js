
import { useState } from 'react';
import './App.css';

function App() {

  //const [first, setfirst] = useState(0)
 // const [first, setfirst] = useState(0)
  const [pension, setPension] = useState(0.25)
  //const [first, setfirst] = useState(0)
  //const [first, setfirst] = useState(0)

  function countSalary (e) {
    e.preventDefault()



  
  }


  return (
  <>
    <h3>Loan Calculator</h3>
    <form>
      <div>
        <label>Salary</label>
        <input />
      </div>
      <div>
        <label>Tax (%)</label>
        <input />
      </div>
      <div>
        <label>Pension (%)</label>
        <select>
          <option></option>
        </select>
      </div>
      <div>
        <label>Insurance (%)</label>
        <input />
      </div>
      <div>
        <p>Your salary after payments:</p>
        <output>Tulos tähän</output>
      </div>
    </form>
  </>
  );
}

export default App;
