import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainhome from "./pages/Mainhome";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Mainhome />} />
          <Route path="/products" element={<Products />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
