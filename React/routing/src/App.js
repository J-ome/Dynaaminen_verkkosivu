import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {

  return (
    <>
      <Header />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
