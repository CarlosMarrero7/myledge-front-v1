import React, { useState } from 'react';
import { fetchPayrollsByUser } from '../api';

const Payroll = () => {
  const [user_id, setUserId] = useState(''); // State for user_id input
  const [payrolls, setPayrolls] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFetchPayrolls = async () => {
    setLoading(true);
    try {
      const data = await fetchPayrollsByUser(user_id);
      setPayrolls(data);
    } catch (error) {
      console.error('Failed to fetch payrolls data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Fetch Payroll by User ID</h2>
      <label>
        User ID:
        <input
          type="text"
          value={user_id}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Enter user ID"
        />
      </label>
      <button onClick={handleFetchPayrolls} disabled={!user_id || loading}>
        {loading ? 'Loading...' : 'Fetch Payroll'}
      </button>
      <ul>
        {payrolls.map((payroll) => (
          <li key={payroll.payroll_id}>
            <div>Employee Name: {payroll.employee_name}</div>
            <div>Position: {payroll.position}</div>
            <div>Hourly Rate: ${payroll.hourly_rate.toFixed(2)}</div>
            <div>Gross Pay: ${payroll.gross_pay.toFixed(2)}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Payroll;
