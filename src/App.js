import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
// import {Routes , Route} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Products from './component/Products';
import Product from './component/Product';
import About from './component/About';
import Footer from './component/Footer';

function App() {
  return (
   <>
     <Navbar/>
     <Routes>
       <Route exact path='/' element={<Home/>}/>
       <Route exact path='/products' element={<Products/>}/>
       <Route exact path='/products/:id' element={<Product/>}/>
       <Route exact path='/about' element={<About/>}/>
     </Routes>
     <Footer/>
   </>
  );
}

export default App;
