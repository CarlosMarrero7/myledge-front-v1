import React, { useState } from 'react';
import { fetchAccountsByUser } from '../api';

const Accounts = ({ userId }) => {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFetchAccounts = async () => {
    setLoading(true);
    try {
      const data = await fetchAccountsByUser(userId);
      setAccounts(data);
    } catch (error) {
      console.error('Failed to fetch accounts:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Accounts for User {userId}</h2>
      <button onClick={handleFetchAccounts} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Accounts'}
      </button>
      <ul>
        {accounts.map((account) => (
          <li key={account.id}>{account.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Accounts;
