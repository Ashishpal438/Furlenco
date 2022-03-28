import './App.css';
import { Navbar } from "./components/Home/Navbar/Navbar";
import { Home } from "./components/Home/Home.jsx";
import { Route, Routes } from "react-router-dom";

import Bottom from './compotent/electronics/Bottom';
import Electronics from './compotent/electronics/Electronics';
import Footer from './compotent/electronics/Footer';
import Login from './compotent/Login/Login';
import SignUp from './compotent/Login/SignUp';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/electronics" element={<Electronics />} />
      </Routes>
      {/* <Login />
      <SignUp/> */}
      {/* <Electronics /> */}
      <Bottom/>
      <Footer/>
=======
