//import logo from './logo.svg';
import './App.css';

import Register from './components/CustomerLogReg/Register';
import Login from './components/CustomerLogReg/Login';
import Home from './components/Home/Home';
import BrLogin from './components/BrokerLogin/BrLogin';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Property from './components/Property/Property';
import Customer from './components/Customer/Customer';

function App() {
  return (
    <Router>
    <div className="container">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/brokerlogin" element={<BrLogin/>}/>
        <Route path="/property" element={<Property/>}/>
        <Route path="/customer" element={<Customer/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
