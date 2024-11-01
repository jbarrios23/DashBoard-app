import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo" >Dashboard Analytics</h1>
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
