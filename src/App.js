import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetails from './containers/ProductDetails';
import Header from "./containers/Header";
import "./App.css";
// import ProductDetails from "./containers/ProductDetails";

function App() {
  return (
    <>
       <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" exact element={<ProductListing/>} />
            <Route path="/product/:productId" exact element={<ProductDetails/>} />
            <Route>404 Not Found!</Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
