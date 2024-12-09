import styled from 'styled-components';

import breakpoints from './breakpoints.style';

export const Container = styled.div`
  align-items: center;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
`;

export const Texto = styled.p`
  background-color: transparent;
  font-family: Arial, sans-serif;
  font-size: 0.7rem;

  /* Responsividade */
  @media (min-width: ${breakpoints.desktop}) {
    font-size: 0.8rem;
  }
`;
