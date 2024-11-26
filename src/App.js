
import './App.css';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Register from './Components/Register/Register';

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <Login></Login>
    <Footer></Footer>
    </div>
  );
}

export default App;
