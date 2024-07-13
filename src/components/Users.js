import React, { useState } from 'react';
import { fetchUsers } from '../api';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFetchUsers = async () => {
    setLoading(true);
    try {
      const data = await fetchUsers();
      setUsers(data);
    } catch (error) {
      console.error('Failed to fetch users:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Users</h2>
      <button onClick={handleFetchUsers} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Users'}
      </button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
