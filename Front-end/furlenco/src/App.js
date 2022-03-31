import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home.jsx";
import { Electronics } from "./components/electronics/Electronics";
import { Route, Routes } from "react-router-dom";
import { Desc } from "./components/electronics/Desc";
import Footer from "./components/electronics/Footer";
import { Cart } from "./components/electronics/Cart";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item" element={<Electronics />} />
        <Route path="/details/:name" element={<Desc />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
