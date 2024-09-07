import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

// Define a static default user
const defaultUser = {
  email: 'boboypakhi@gmail.com',
  password: '123456',
};

export const AppProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);  // Initialize cart as an empty array

  // On initial render, check if the user is already authenticated
  useEffect(() => {
    const storedUser = localStorage.getItem('auth');
    if (storedUser) {
      setAuth(JSON.parse(storedUser));
    }
  }, []);

  const login = (user) => {
    // Check if the user credentials match the static default user
    if (user.email === defaultUser.email && user.password === defaultUser.password) {
      setAuth(user);
      localStorage.setItem('auth', JSON.stringify(user));
      return true;  // Indicate successful login
    } else {
      return false;  // Indicate failed login
    }
  };

  const signup = (user) => {
    // Save new user credentials to localStorage (or ideally a database)
    setAuth(user);
    localStorage.setItem('auth', JSON.stringify(user));
  };

  const logout = () => {
    setAuth(null);
    localStorage.removeItem('auth');
  };

  // Function to fetch products
  const fetchProducts = async () => {
    try {
      const response = await fetch('/products.json');
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setProducts(data);
      console.log("json data", data);
    } catch (error) {
      console.error("Failed to fetch products", error);
    }
  };

  // Function to add item to cart
  const addToCart = (product) => {
    setCart(prevCart => [...prevCart, { ...product, quantity: 1 }]);
  };

  // Function to remove item from cart
  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  // Function to update item quantity
  const updateQuantity = (productId, quantity) => {
    setCart(prevCart => prevCart.map(item =>
      item.id === productId ? { ...item, quantity } : item
    ));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <AppContext.Provider value={{ auth, login, signup, logout, products, addToCart, cart, removeFromCart, updateQuantity }}>
      {children}
    </AppContext.Provider>
  );
};
