import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Import your global styles


const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="header">
        <nav className='nav'>
           <div className="logocontainer">
          <img src="/Myledger.png" className="logo" alt="MyLedger Logo" />
        </div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/accounts">Accounts</Link></li>
            <li><Link to="/transactions">Transactions</Link></li>
            <li><Link to="/payroll">Payroll</Link></li>
            <li><Link to="/invoice">Invoice</Link></li>
            <li><Link to="/users">Users</Link></li>
          </ul>
        </nav>
      </header>
      <div className="content-container">
        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
