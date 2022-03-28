import "./App.css";
import { Navbar } from "./components/Home/Navbar/Navbar";
import { Home } from "./components/Home/Home.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
