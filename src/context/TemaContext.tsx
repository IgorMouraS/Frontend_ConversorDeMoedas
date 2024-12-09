// context/themeContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';

type TemaContextoType = {
  isDark: boolean;
  alterarTema: () => void;
};

const TemaContexto = createContext<TemaContextoType | undefined>(undefined);

export const useTema = () => {
  const contexto = useContext(TemaContexto);
  if (!contexto) {
    throw new Error('useTema must be used within a ProvedorTema');
  }
  return contexto;
};

type ProvedorTemaProps = {
  children: ReactNode;
};

export const ProvedorTema: React.FC<ProvedorTemaProps> = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const temaSalvo = localStorage.getItem('isDark');
    return temaSalvo === 'true';
  });

  const alterarTema = () => {
    setIsDark((prev) => {
      const setaTema = !prev;
      localStorage.setItem('isDark', String(setaTema));
      return setaTema;
    });
  };

  return (
    <TemaContexto.Provider value={{ isDark, alterarTema }}>
      {children}
    </TemaContexto.Provider>
  );
};
