
import './App.css';
import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './components/HomePage';
import ContactP from './ContactPage/ContactP';

function App() {
  return (
    

    <Router>
<Routes>

<Route path="/" element= {<Home/>} />

<Route path="/Contact" element={<ContactP/>} />
</Routes>

</Router>

    
  );
}

export default App;
