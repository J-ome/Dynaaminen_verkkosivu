import Item from './Item.js';
import './App.css';
import { useEffect, useState } from 'react';
import uuid from 'react-uuid';

function App() {


  const [items, setItems] = useState([])

  useEffect(() => {
    const shoppingList = Array()
    shoppingList.push(new Item("Coffee", 1))
    shoppingList.push(new Item("Cookies", 5))
    shoppingList.push(new Item("Milk", 2))
    setItems(shoppingList)
  }, [])
  

  return (
    <div>
      <h3>Shopping List</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={uuid()}>
              <td>{item.name}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
