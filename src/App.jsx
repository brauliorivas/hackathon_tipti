import Header from "./components/Header"
import { Routes, Route } from 'react-router-dom';
import Home from "./routes/Home";
import Explore from "./routes/Explore";
import ChatBot from "./routes/ChatBot";
import StoreHandler from "./util/StoreHandler";
import CartContext from "./context/Cart";
import { useState } from "react";
import Cart from "./routes/Cart";
import Checkout from "./routes/Checkout";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <CartContext.Provider value={{ cart, setCart }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/account" element={<h1>Cuenta</h1>} />
          <Route path="/chatbot" element={<ChatBot />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/store/:storeId" element={<StoreHandler />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </CartContext.Provider>
    </>
  )
}

export default App
