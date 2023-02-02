
import { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const names = [ "Teppo", "Aku", "Hannu", "Iines"]
    setItems(names)
  }, [])
  return (
    <div style={{margin: "30px"}}>
      <h3>Names</h3>
      <ul>{items.map(item => (
      <li key={item}>
        {item}
      </li>))}
        
      </ul>
    </div>
  );
}

export default App;
