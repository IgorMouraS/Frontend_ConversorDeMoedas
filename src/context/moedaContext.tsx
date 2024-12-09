// Bibliotecas externas
import React, { createContext, useContext, useState, useEffect } from 'react';
import { format } from 'date-fns';

// Serviço
import { obterTaxasDeCambio } from '../services/exchangeService';

interface ContextoMoeda {
  moedas: string[];
  taxaDeCambio: { [key: string]: number };
  atualizarTaxas: () => void;
  ultimaAtualizacao: string | null;
  ultimaVerificacao: string | null;
}

const MoedaContexto = createContext<ContextoMoeda | null>(null);

interface ProvedorMoedaProps {
  children: React.ReactNode;
}

export const ProvedorMoeda: React.FC<ProvedorMoedaProps> = ({ children }) => {
  const [moedas, setMoedas] = useState<string[]>([]);
  const [taxaDeCambio, setTaxaDeCambio] = useState<{ [key: string]: number }>(
    {},
  );
  const [ultimaAtualizacao, setUltimaAtualizacao] = useState<string | null>(
    null,
  );
  const [ultimaVerificacao, setUltimaVerificacao] = useState<string | null>(
    null,
  );
  const dataAtual = (): string => {
    return format(new Date(), 'dd/MM/yyyy HH:mm:ss');
  };

  // Função para atualizar as taxas de câmbio
  const atualizarTaxas = async () => {
    const dadosArmazenados = localStorage.getItem('tiposDeMoeda');
    let data;
    if (!dadosArmazenados || dadosArmazenados === 'undefined') {
      data = await obterTaxasDeCambio('BRL');
      localStorage.setItem(
        'tiposDeMoeda',
        JSON.stringify(data.conversion_rates),
      );
    } else {
      data = { conversion_rates: JSON.parse(dadosArmazenados) };
    }

    setMoedas(Object.keys(data.conversion_rates));
    setTaxaDeCambio(data.conversion_rates);

    localStorage.setItem('ultimaDataAtualizacao', dataAtual());
    setUltimaAtualizacao(dataAtual());
  };

  // função que verifica se precisa de atualização
  const verificarAtualizacao = async () => {
    const dadosArmazenados = localStorage.getItem('tiposDeMoeda');
    const data = await obterTaxasDeCambio('BRL');

    if (!dadosArmazenados || dadosArmazenados === 'undefined') {
      await atualizarTaxas();
    } else {
      const taxasArmazenadas = JSON.parse(dadosArmazenados);

      // verifica diferença entre taxas armazenadas e as novas
      if (
        JSON.stringify(taxasArmazenadas) !==
        JSON.stringify(data.conversion_rates)
      ) {
        await atualizarTaxas();
      }

      if (moedas.length === 0 && Object.keys(taxaDeCambio).length === 0) {
        setMoedas(Object.keys(taxasArmazenadas));
        setTaxaDeCambio(taxasArmazenadas);
      }

      const dtultimaAtualizacao = localStorage.getItem('ultimaDataAtualizacao');
      if (!dtultimaAtualizacao || dtultimaAtualizacao === 'undefined') {
        await atualizarTaxas();
      } else {
        if (!ultimaAtualizacao || ultimaAtualizacao != '') {
          setUltimaAtualizacao(dtultimaAtualizacao);
        }
      }
    }

    setUltimaVerificacao(dataAtual());
  };

  useEffect(() => {
    verificarAtualizacao();
    // ATIVAR Somente em produção
    const intervalo = setInterval(() => {
      verificarAtualizacao();
    }, 86400000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <MoedaContexto.Provider
      value={{
        moedas,
        taxaDeCambio,
        atualizarTaxas,
        ultimaAtualizacao,
        ultimaVerificacao,
      }}
    >
      {children}
    </MoedaContexto.Provider>
  );
};

// Hook para acessar o contexto
export const useMoeda = (): ContextoMoeda => {
  const contexto = useContext(MoedaContexto);
  if (!contexto) {
    throw new Error('useMoeda must be used within a ProvedorMoeda');
  }
  return contexto;
};
