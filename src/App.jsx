import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import ProductList from "./components/ProductList/ProductList";
import Signup from "./components/Signup/Signup";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout/Checkout";
import ProtectedRoute from './components/ProtectedRoute'; // Import the protected route
// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected routes */}
        <Route path="/products" element={
          <ProtectedRoute>
            <ProductList />
          </ProtectedRoute>
        } />
        <Route path="/cart" element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        } />
        <Route path="/checkout" element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>

  );
};

export default App;
