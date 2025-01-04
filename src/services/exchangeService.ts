// External libraries
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const getExchangeRates = async (baseCurrency: string) => {
  // return true;
  if (!API_URL) {
    throw new Error('API URL is not defined in environment variables.');
  }

  try {
    const response = await axios.get(`${API_URL}${baseCurrency}`);
    return response.data;
  } catch (error) {
    console.error('Error getting exchange rates:', error);
    throw error;
  }
};
