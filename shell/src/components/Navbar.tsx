import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: 'blue', padding: '10px' }}>
      <h1 style={{ color: 'white' }}>Dashboard Analytics</h1>
      <div className="navbar-links">
        <Link className="navbar-link" to="/">Home</Link>
        <Link className="navbar-link" to="/sales">Ventas</Link>
        <Link className="navbar-link" to="/users">Usuarios</Link>
        {/* <Link className="navbar-link" to="/demographics">Demográficos</Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
