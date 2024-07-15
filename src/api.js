import axios from 'axios';

const API_URL = 'http://localhost:8081/myledger'; // Base URL for the backend

// Fetch all transactions
export const fetchTransactions = async () => {
  try {
    const response = await axios.get(`${API_URL}/transactions`);
    return response.data;
  } catch (error) {
    console.error('Error fetching transactions:', error);
    throw error;
  }
};

// Other API functions...

// Fetch all accounts by user
export const fetchAccountsByUser = async (user_id) => {
  try {
    const response = await axios.get(`${API_URL}/accounts/${user_id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching accounts:', error);
    throw error;
  }
};

// Fetch transactions by account
export const fetchTransactionsByAccount = async (account_id) => {
  try {
    const response = await axios.get(`${API_URL}/transactions/${account_id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching transactions:', error);
    throw error;
  }
};

// Fetch all payrolls by user
export const fetchPayrollsByUser = async (user_id) => {
  try {
    const response = await axios.get(`${API_URL}/payroll/${user_id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching payrolls:', error);
    throw error;
  }
};

// Fetch all users
export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

// Fetch user by username
export const fetchUserByUsername = async (username) => {
  try {
    const response = await axios.get(`${API_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user by username:', error);
    throw error;
  }
};

// Create invoice
export const createInvoice = async (invoiceData) => {
  try {
    const response = await axios.post(`${API_URL}/invoices`, invoiceData);
    return response.data;
  } catch (error) {
    console.error('Error creating invoice:', error);
    throw error;
  }
};

// Authentication API
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/users/register`, userData);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

export const loginUser = async (loginData) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, loginData);
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};
