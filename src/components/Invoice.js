import React, { useState } from 'react';
import { createInvoice } from '../api'; // Correct import

const Invoice = () => {
  const [invoiceData, setInvoiceData] = useState({
    amount: '',
    date: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvoiceData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createInvoice(invoiceData);
      setMessage('Invoice created successfully!');
      setInvoiceData({ amount: '', date: '' }); // Reset form
    } catch (error) {
      console.error('Error creating invoice:', error);
      setMessage('Failed to create invoice.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Create Invoice</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Amount:
          <input
            type="number"
            name="amount"
            value={invoiceData.amount}
            onChange={handleChange}
            placeholder="Enter amount"
            required
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={invoiceData.date}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" disabled={loading}>
          {loading ? 'Creating...' : 'Create Invoice'}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Invoice;
