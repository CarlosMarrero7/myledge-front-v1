import axios from 'axios';

const API_URL = 'http://localhost:8081/myledger'; // Base URL for the backend

// Accounts API
export const fetchAccountsByUser = async (user_id) => {
  try {
    const response = await axios.get(`${API_URL}/accounts/${user_id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching accounts:', error);
    throw error;
  }
};

// Payrolls API
export const fetchPayrolls = async () => {
  try {
    const response = await axios.get(`${API_URL}/payrolls`);
    return response.data;
  } catch (error) {
    console.error('Error fetching payrolls:', error);
    throw error;
  }
};

// Transactions API
export const fetchTransactions = async () => {
  try {
    const response = await axios.get(`${API_URL}/transactions`);
    return response.data;
  } catch (error) {
    console.error('Error fetching transactions:', error);
    throw error;
  }
};

// Users API
export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};


