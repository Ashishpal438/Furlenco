import './App.css';
import Bottom from './compotent/electronics/Bottom';
import Electronics from './compotent/electronics/Electronics';
import Footer from './compotent/electronics/Footer';
import Login from './compotent/Login/Login';
import SignUp from './compotent/Login/SignUp';

function App() {
  return (
    <div className="App">
      {/* <Login />
      <SignUp/> */}
      <Electronics />
      <Bottom/>
      <Footer/>
    </div>
  );
}
export default App;
