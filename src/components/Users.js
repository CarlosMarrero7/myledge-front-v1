import React, { useState } from 'react';
import { fetchUserByUsername } from '../api'; // Correct import

const Users = () => {
  const [username, setUsername] = useState(''); // State for username input
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFetchUsers = async () => {
    setLoading(true);
    try {
      const data = await fetchUserByUsername(username);
      setUsers(data);
    } catch (error) {
      console.error('Failed to fetch users data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Fetch User by Username</h2>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
        />
      </label>
      <button onClick={handleFetchUsers} disabled={!username || loading}>
        {loading ? 'Loading...' : 'Fetch User'}
      </button>
      <ul>
        {users.map((user) => (
          <li key={user.user_id}>
            <div>Username: {user.username}</div>
            <div>First Name: {user.first_name}</div>
            <div>Last Name: {user.last_name}</div>
            <div>Email: {user.email}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
