import './App.css';
import { useState, useEffect } from 'react';
import Product from './Product';

function App() {

  const [products, setProducts] = useState([])

    useEffect(() => {
      const myProducts = []
      myProducts.push(new Product(1, "Takki", "Tosi hieno takki", 50,"placeholder.png"))
      myProducts.push(new Product(2, "Housut", "Mahtavat housut", 150,"placeholder.png"))
      myProducts.push(new Product(3, "Lakki", "Hintava lakki", 550,"placeholder.png"))
      setProducts(myProducts)
    }, [])
    

  return (
    <div>
      <h1>My Webshop</h1>
      {products.map(product => (
        <div key={product.id}>
          <img src={product.image} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
