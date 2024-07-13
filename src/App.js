import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Accounts from './components/Accounts';
import Transactions from './components/Transactions';
import Payroll from './components/Payroll';
import Invoice from './components/Invoice';
import Users from './components/Users';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accounts" element={<Accounts userId={1} />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/payroll" element={<Payroll />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
