// Context for the conversion of the application

// External libraries
import React, { createContext, useContext } from 'react';

// hooks
import { useConversion } from '../../hooks/useConversion';

// interfaces
import { ConversionContext_I } from './ConversionContext.interfaces';

const ConversionContext = createContext<ConversionContext_I | undefined>(
  undefined,
);

export const ConversionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const conversion = useConversion();

  return (
    <ConversionContext.Provider value={conversion}>
      {children}
    </ConversionContext.Provider>
  );
};

export const useConversionContext = (): ConversionContext_I => {
  const context = useContext(ConversionContext);
  if (!context) {
    throw new Error(
      'useConversionContext must be used within a ConversionProvider',
    );
  }
  return context;
};
