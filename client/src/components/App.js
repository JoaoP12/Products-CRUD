import React, { useState, useEffect } from "react";
import Axios from "axios";
import '../css/App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./HomePage";
import CreateProduct from "./CreateProduct";
import Product from "./Product";
import EditProduct from "./EditProduct";

function App() {
  return (
    <>
      <header>
        <div className="header">
          <div className="home_button"><a href="/"><p>Home</p></a></div>
          <div className="title"><h1>Produtos CRUD</h1></div>
        </div>
      </header>

      <Router>
        <Route exact path="/" component={HomePage} />
        <Route path="/create/product" component={CreateProduct} />
        <Route path="/edit/product/:id" component={EditProduct} />
        <Route path="/view/product/:id" component={Product} />
      </Router>
    </>
  );
}

export default App;
