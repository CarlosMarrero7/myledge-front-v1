import React, { useState } from 'react';

const Invoice = () => {
  const [invoiceDetails, setInvoiceDetails] = useState({
    from: '',
    to: '',
    description: '',
    amount: '',
    subtotal: '',
    discount: '',
    tax: '',
    total: '',
    comments: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvoiceDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleSave = () => {
    // Logic to save invoice as PDF
    console.log('Invoice saved as PDF:', invoiceDetails);
  };

  return (
    <div>
      <h2>Invoice</h2>
      <form>
        <input type="text" name="from" placeholder="From" onChange={handleChange} />
        <input type="text" name="to" placeholder="To" onChange={handleChange} />
        <input type="text" name="description" placeholder="Description" onChange={handleChange} />
        <input type="text" name="amount" placeholder="Amount" onChange={handleChange} />
        <input type="text" name="subtotal" placeholder="Subtotal" onChange={handleChange} />
        <input type="text" name="discount" placeholder="Discount" onChange={handleChange} />
        <input type="text" name="tax" placeholder="Tax" onChange={handleChange} />
        <input type="text" name="total" placeholder="Total" onChange={handleChange} />
        <input type="text" name="comments" placeholder="Comments" onChange={handleChange} />
        <button type="button" onClick={handleSave}>Save as PDF</button>
      </form>
    </div>
  );
};

export default Invoice;
