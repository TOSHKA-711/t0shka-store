import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Cart from "./component/Cart";
import Home from "./component/Home";
import NavBar from "./component/navbar/NavBar";
import Products from "./component/Products";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" index element ={<Home />} />
          <Route path="/t0shka-store" element ={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

