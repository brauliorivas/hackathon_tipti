import Header from "./components/Header"
import { Routes, Route } from 'react-router-dom';
import Home from "./routes/Home";
import Explore from "./routes/Explore";
import ChatBot from "./routes/ChatBot";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/account" element={<h1>Cuenta</h1>} />
        <Route path="/chatbot" element={<ChatBot />} />
        <Route path="/cart" element={<h1>Carrito</h1>} />
      </Routes>
    </>
  )
}

export default App
