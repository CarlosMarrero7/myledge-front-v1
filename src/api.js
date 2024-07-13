import axios from 'axios';

const API_URL = 'http://localhost:8099/myledge'; // Base URL for the backend

// Accounts API
export const fetchAccountsByUser = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/myledger/accounts/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching accounts:', error);
    throw error;
  }
};

// Payrolls API
export const fetchPayrolls = async () => {
  try {
    const response = await axios.get(`${API_URL}/myledger/payrolls`);
    return response.data;
  } catch (error) {
    console.error('Error fetching payrolls:', error);
    throw error;
  }
};

// Transactions API
export const fetchTransactions = async () => {
  try {
    const response = await axios.get(`${API_URL}/myledger/transactions`);
    return response.data;
  } catch (error) {
    console.error('Error fetching transactions:', error);
    throw error;
  }
};

// Users API
export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/myledger/users`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};


