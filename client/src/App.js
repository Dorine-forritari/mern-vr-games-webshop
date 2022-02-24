import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// components
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import Sidebar from './components/Sidebar';
import HomeView from './views/HomeView';
import ProductView from './views/ProductView';
import CartView from './views/CartView';
import AboutView from './views/AboutView.js';

function App() {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  // cart functionality
  // Use localStorage for cart persistence despite browser reloads
  let localCart = localStorage.getItem("cart");

  const addItem = (itemForCart) => {
    let cartCopy = [...cartItems];
    let existingItem = cartCopy.find(cartItem => cartItem._id === itemForCart._id);
    if (existingItem) {
        existingItem.quantity += 1
    } else {
      itemForCart.quantity = 1;
      cartCopy.push(itemForCart);
    }
    setCartItems(cartCopy);
    let stringCart = JSON.stringify(cartCopy);
    localStorage.setItem("cart", stringCart);
  }

  const editItem = (itemToEdit, amount) => {
    let cartCopy = [...cartItems];
    let existingItem = cartCopy.find(item => item._id === itemToEdit._id);
    if (!existingItem) return
    existingItem.quantity += amount;
    if (existingItem.quantity <= 0) {
      cartCopy = cartCopy.filter(item => item._id !== itemToEdit._id)
    }
    setCartItems(cartCopy);
    let cartString = JSON.stringify(cartCopy);
    localStorage.setItem('cart', cartString);
  }

  const removeItem = (itemToRemove) => {
    let cartCopy = [...cartItems];
    cartCopy = cartCopy.filter(item => item._id !== itemToRemove._id);
    setCartItems(cartCopy);
    let cartString = JSON.stringify(cartCopy);
    localStorage.setItem('cart', cartString);
  }

  useEffect(() => {
    localCart = JSON.parse(localCart);
    if (localCart) setCartItems(localCart);
  }, []);

  useEffect(() => {
    let nCartItems = 0;
    cartItems.map(item => nCartItems += item.quantity);
    setCartCount(nCartItems);
  }, [cartItems]);

  return (
    <Router>
      <Navbar click={() => setSidebarToggle(!sidebarToggle)} totalCartItems={cartCount}/>
      <Sidebar show={sidebarToggle} click={() => setSidebarToggle(false)} />
      <Backdrop show={sidebarToggle} click={() => setSidebarToggle(false)} />
      <Routes>
        <Route path="/" element={<HomeView click={() => setSidebarToggle(!sidebarToggle)} />}/>
        <Route path="/product/:id" element={<ProductView addCallback={addItem}/>}/>
        <Route path="/cart" element={<CartView cartItems={cartItems} editCallback={editItem} removeCallback={removeItem}/>}/>
        <Route path="/about" element={<AboutView />}/>
      </Routes>
    </Router>
  );
}

export default App;
