
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import Logo from '../../assets/images/lbg-logo.png';



export default function Header() {
  return (
    <header className="app-header">
      <nav>
        <div className="logo" data-selector="lloyds-banking-group-logo">
          <Link to='/landing'>
            <img alt="MIP Portal" title="MIP Portal" src={Logo} className="lbg-logo" />
          </Link>
          <h3 data-selector="portal-header">QA Testing Portal</h3>
        </div>
        <div className="user-details">
          <h4 data-selector="user-name">User</h4>
        </div>
      </nav>
    </header>
  );
}


