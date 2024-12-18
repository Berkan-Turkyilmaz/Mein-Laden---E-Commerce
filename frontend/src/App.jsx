import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import  ProductsByCategory  from "./pages/ProductsByCategory.jsx";

export default function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/products/:id" element={<Detail />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/categories/:category" element={<ProductsByCategory />}></Route>

          </Routes>
          <Footer />
        </BrowserRouter>
      
      <Toaster />
    </div>
  );
}
