import React, { useState } from 'react';
import { fetchTransactions } from '../api';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFetchTransactions = async () => {
    setLoading(true);
    try {
      const data = await fetchTransactions();
      setTransactions(data);
    } catch (error) {
      console.error('Failed to fetch transactions:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Transactions</h2>
      <button onClick={handleFetchTransactions} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Transactions'}
      </button>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>{transaction.details}</li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
