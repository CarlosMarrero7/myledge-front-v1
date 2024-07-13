import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header>
        <h1>MyLedge App</h1>
        <nav>
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
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
