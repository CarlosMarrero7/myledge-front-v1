import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Accounts from './components/Accounts';
import Transactions from './components/Transactions';
import Payroll from './components/Payroll';
import Users from './components/Users';
import Login from './components/Login';
import Register from './components/Register';
import Invoice from './components/Invoice';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/payroll" element={<Payroll />} />
          <Route path="/users" element={<Users />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/invoice" element={<Invoice />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
