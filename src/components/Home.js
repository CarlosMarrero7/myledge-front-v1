import React, { useState, useEffect } from 'react';
import { fetchTransactions } from '../api';

const Home = () => {
  const [totalSales, setTotalSales] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const transactions = await fetchTransactions();
        console.log('Fetched transactions:', transactions);

        const sales = transactions
          .filter(transaction => transaction.category === 'income')
          .reduce((acc, transaction) => acc + transaction.amount, 0);

        const expenses = transactions
          .filter(transaction => transaction.amount < 0)
          .reduce((acc, transaction) => acc + transaction.amount, 0);

        console.log('Total Sales:', sales);
        console.log('Total Expenses:', expenses);

        setTotalSales(sales);
        setTotalExpenses(expenses);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Home</h1>
      <div>Total Sales: ${totalSales.toFixed(2)}</div>
      <div>Total Expenses: ${totalExpenses.toFixed(2)}</div>
    </div>
  );
};

export default Home;
