import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="headerDiv">
    <Link to='/'>Home</Link>
    <Link to='/addkeg'>Add Keg</Link>
    <Link to='/editkeg'>Edit Keg</Link>
    </div>
  );
}

export default Header;
