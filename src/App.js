//import logo from './logo.svg';
import './App.css';
import Header from './components/Home/Header';
import Register from './components/CustomerLogReg/Register';
import Login from './components/CustomerLogReg/Login';
import Home from './components/Home/Home';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="container">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
