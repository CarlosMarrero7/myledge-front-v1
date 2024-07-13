import React, { useState } from 'react';
import { fetchPayrolls } from '../api';

const Payroll = () => {
  const [payrolls, setPayrolls] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFetchPayrolls = async () => {
    setLoading(true);
    try {
      const data = await fetchPayrolls();
      setPayrolls(data);
    } catch (error) {
      console.error('Failed to fetch payrolls:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Payroll</h2>
      <button onClick={handleFetchPayrolls} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Payrolls'}
      </button>
      <ul>
        {payrolls.map((payroll) => (
          <li key={payroll.id}>{payroll.name} - ${payroll.hourlyRate}</li>
        ))}
      </ul>
    </div>
  );
};

export default Payroll;
