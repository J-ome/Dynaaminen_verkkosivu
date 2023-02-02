
import React, { useState } from "react";
import "./App.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

function App() {
  const [amount, setAmount] = useState(0);
  const [converted, setConverted] = useState(0);

  const handleInput = (e) => {
    setAmount(e.target.value);
    setConverted(e.target.value * 0.86);
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Calculators</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Currency Convertor</Nav.Link>
            <Nav.Link href="#link">Alcometer</Nav.Link>
            <Nav.Link href="#link">BMI Calculator</Nav.Link>
            <NavDropdown title="Financial Calculators" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Net Salary Calculator</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Heart Rate Limit</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Calory Calculator</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <div className="container my-5">
        <h1>Currency Converter</h1>
        <input type="number" value={amount} onChange={handleInput} />
        <p>Euros: {amount}</p>
        <p>Pounds: {converted}</p>
      </div>
    </div>
  );
  
}

export default App;


