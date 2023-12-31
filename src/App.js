import React from "react";
import {BrowserRouter as Router} from 'react-router-dom'
import { GlobalStyle } from "./GlobalStyle";
import Hero from './components/Hero'
import Products from './components/Products'
import { productData, productDataTwo } from './components/Products/data'
import Feature from './components/Feature';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Escoge tu favorita' data={productData} />
      <Feature />
      <Products heading='Un trato dulce para ti' data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
