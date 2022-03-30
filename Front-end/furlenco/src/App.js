import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import {Home} from './components/Home/Home.jsx'
import Login from './components/Login/Login'
import SignUp from './components/Login/SignUp'
import Electronics from './components/electronics/Electronics'
import Bottom from './components/electronics/Bottom'
import Footer from './components/electronics/Footer'


function App() {
  return (
    <div className="App">
      <Login />
      <SignUp />
      <Electronics />
      <Bottom/>
      <Footer/>
      <Navbar />
      <Home/> 
    </div>
  );
}
export default App;
