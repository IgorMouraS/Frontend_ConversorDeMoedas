import axios from 'axios';

const API_URL =
  'https://v6.exchangerate-api.com/v6/8e0373da95fab0502608ea54/latest/';

// Função para buscar as taxas de câmbio
export const fetchTaxaDeMoedas = async (baseCurrency: string) => {
  try {
    const response = await axios.get(`${API_URL}${baseCurrency}`);
    console.log('Response: ', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar as taxas de câmbio:', error);
    throw error;
  }
};
