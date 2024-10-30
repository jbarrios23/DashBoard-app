import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Sales from './pages/Sales'
import './App.css';


function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sales" element={<Sales />} />
      {/* <Route path="/users" element={<Users />} />
      <Route path="/demographics" element={<Demographics />} /> */}
    </Routes>
  </Router>
  );
}

export default App;
