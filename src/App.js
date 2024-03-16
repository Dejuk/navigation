React from 'react'

import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Pages/Home';
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import Services from './components/Pages/Services';
import Products from './components/Pages/Products';
import ContactUs from './components/Pages/ContactUs';
import SignUp from './components/Pages/SignUp';
import Marketing from './components/Pages/Marketing';
import Consulting from './components/Pages/Consulting';


function App() {
  return (
    <Router>
      <Navbar />
      <SignUp/>
      <Routes> <Route path='/' exact components ={Home} />
        <Route path='/services' components ={Services} />
        <Route path='/products' components ={Products} />
        <Route path='/contact-us' components ={ContactUs} />
        <Route path='/sign-up' button onclick="sign up" components ={SignUp} />
        <Route path='/marketing' components ={Marketing} />
        <Route path='/consulting' components ={Consulting} />
      </Routes>
    </Router>
  );
}

export default App;
