import React, { useState } from 'react';
import { fetchTransactionsByAccount } from '../api'; // Correct import

const Transactions = () => {
  const [account_id, setAccountId] = useState(''); // State for account_id input
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFetchTransactions = async () => {
    setLoading(true);
    try {
      const data = await fetchTransactionsByAccount(account_id);
      setTransactions(data);
    } catch (error) {
      console.error('Failed to fetch transactions data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Fetch Transactions by Account ID</h2>
      <label>
        Account ID:
        <input
          type="text"
          value={account_id}
          onChange={(e) => setAccountId(e.target.value)}
          placeholder="Enter account ID"
        />
      </label>
      <button onClick={handleFetchTransactions} disabled={!account_id || loading}>
        {loading ? 'Loading...' : 'Fetch Transactions'}
      </button>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.transaction_id}>
            <div>Transaction Date: {transaction.transaction_date}</div>
            <div>Description: {transaction.description}</div>
            <div>Category: {transaction.category}</div>
            <div>Amount: ${transaction.amount.toFixed(2)}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
