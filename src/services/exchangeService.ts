import axios from 'axios';

const UAL_API =
  'https://v6.exchangerate-api.com/v6/8e0373da95fab0502608ea54/latest/';

export const obterTaxasDeCambio = async (moedaBase: string) => {
  // return true;
  try {
    const response = await axios.get(`${UAL_API}${moedaBase}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar as taxas de câmbio:', error);
    throw error;
  }
};
