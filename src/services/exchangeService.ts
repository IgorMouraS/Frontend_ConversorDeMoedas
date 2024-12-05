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

// GET https://v6.exchangerate-api.com/v6/YOUR-API-KEY/pair/EUR/GBP/AMOUNT - faz o calculo da conversão...
// GET https://v6.exchangerate-api.com/v6/YOUR-API-KEY/enriched/GBP/JPY - Para pegar informações sobre o pais, inclusive imagem

// 2 funcionalidades extras - Deixar um painel rodando na tela mostrando as converções do real
// Criar um botão para historico de valores para poder pesquisar valores de converção do ano passado
