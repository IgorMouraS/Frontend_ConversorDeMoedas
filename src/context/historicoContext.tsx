import React, { createContext, ReactNode, useContext, useState } from 'react';

interface InfoHistorico {
  moedaOrigem: string;
  moedaDestino: string;
  valor: string;
  resultado: number;
}

interface ContextoHistorico {
  historico: InfoHistorico[];
  setHistorico: React.Dispatch<React.SetStateAction<InfoHistorico[]>>;
}

const HistoricoContexto = createContext<ContextoHistorico | undefined>(
  undefined,
);

interface ProvedorHistoricoProps {
  children: ReactNode;
}

export const useHistorico = () => {
  const contexto = useContext(HistoricoContexto);
  if (!contexto) {
    throw new Error('useHistorico must be used within a HistoricoProvider');
  }
  return contexto;
};

export const ProvedorHistorico: React.FC<ProvedorHistoricoProps> = ({
  children,
}) => {
  const [historico, setHistorico] = useState<InfoHistorico[]>([]);

  return (
    <HistoricoContexto.Provider value={{ historico, setHistorico }}>
      {children}
    </HistoricoContexto.Provider>
  );
};
