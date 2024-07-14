import React, { useState } from 'react';
import { fetchAccountsByUser } from '../api';

const Accounts = () => {
  const [user_id, setUserId] = useState(''); // State for user_id input
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFetchAccounts = async () => {
    setLoading(true);
    try {
      const data = await fetchAccountsByUser(user_id);
      setAccounts(data);
    } catch (error) {
      console.error('Failed to fetch accounts data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Fetch Accounts by User ID</h2>
      <label>
        User ID:
        <input
          type="text"
          value={user_id}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Enter user ID"
        />
      </label>
      <button onClick={handleFetchAccounts} disabled={!user_id || loading}>
        {loading ? 'Loading...' : 'Fetch Accounts'}
      </button>
      <ul>
        {accounts.map((account) => (
          <li key={account.account_id}>
            <div>Account Name: {account.account_name}</div>
            <div>Account Number: {account.account_number}</div>
            <div>Bank Name: {account.bank_name}</div>
            <div>Balance: ${account.balance.toFixed(2)}</div>
            {/* Adjust the rendering according to your accounts data structure */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Accounts;