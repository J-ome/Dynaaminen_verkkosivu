import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [eurot, setEurot] = useState(0)
  const [punnat, setPunnat] = useState(0)

  function laske(e) {
    e.preventDefault()
    setPunnat(eurot *0.9)
  }
  /*
  const laske = (e) => {
    e.preventDefault()
    setPunnat(eurot *0.9)
  }
  */

  return (
    <form onSubmit={laske}>
      <h3>Valuuttalaskuri</h3>
      <div>
        <lable>Eurot</lable>
        <input value={eurot} onChange={e => setEurot(e.target.value)} type="number"/>
      </div>
      <div>
        <label>Punnat</label>
        <output>{punnat}</output>
      </div>
      <button>Laske</button>
    </form>
  );
}

export default App;
