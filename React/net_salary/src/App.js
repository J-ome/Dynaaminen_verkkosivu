
import { useState } from 'react';
import './App.css';
import Options from './components/Options';

function App() {

  const [salary, setSalary] = useState("")
  const [tax, setTax] = useState(0)
  const [pension, setPension] = useState(0)
  const [insurance, setInsurance] = useState(0)
  const [netSalary, setNetSalary] = useState(0)

  const [taxPayment, setTaxPayment] = useState(0)
  const [pensionPayment, setPensionPayment] = useState(0)
  const [insurancePayment, setInsurancePayment] = useState(0)

  function calculateTax(value) {
    setTax(value)
    setTaxPayment(salary / 100 * value)
  }

  function calculatePension(value) {
    setPension(value)
    setPensionPayment(salary / 100 * value)
  }

  function calculateInsurance(value) {
    setInsurance(value)
    setInsurancePayment(salary / 100 * value)
  }


  function countSalary(e) {
    e.preventDefault()

    let salaryResult = 0;

    salaryResult = salary - pensionPayment - taxPayment - insurancePayment

    setNetSalary(salaryResult)



  }


  return (
    <>
      <form onSubmit={countSalary}>
        <h3>Loan Calculator</h3>

        <div>
          <label>Salary</label>
          <input type="number" value={salary} onChange={e => setSalary(e.target.value)} />
        </div>
        <div>
          <label>Tax (%)</label>
          <input type="number" value={tax} onChange={e => calculateTax(e.target.value)} />
          <output class="payments">{taxPayment.toFixed(2)}€</output>
        </div>
        <div>
          <label>Pension (%)</label>
          <select value={pension} onChange={e => calculatePension(e.target.value)}>
            <Options />
          </select>
          <output class="payments">{pensionPayment.toFixed(2)}€</output>
        </div>
        <div>
          <label>Insurance (%)</label>
          <select value={insurance} onChange={e => calculateInsurance(e.target.value)}>
            <Options />
          </select>
          <output class="payments">{insurancePayment.toFixed(2)}€</output>
        </div>
        <div>
          <p>Your salary after payments:</p>
          <output>{netSalary.toFixed(2)}€</output>
        </div>
        <button>Calculate</button>
      </form>
    </>
  );
}

export default App;
