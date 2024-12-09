import styled from 'styled-components';

const breakpoints = {
  mobile: '510px',
  tablet: '790px',
  desktop: '1024px',
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: transparent;

  /* Responsividade */
  @media (max-width: ${breakpoints.mobile}) {
  }

  @media (min-width: ${breakpoints.mobile}) and max-width: ${breakpoints.tablet}) {
    padding: 1rem;
  }

  @media (min-width: ${breakpoints.desktop}) {
  }
`;

export const Texto = styled.p`
  font-family: Arial, sans-serif;
  background-color: transparent;
  font-size: 0.7rem;

  /* Responsividade */
  @media (max-width: ${breakpoints.mobile}) {
  }

  @media (min-width: ${breakpoints.mobile}) and max-width: ${breakpoints.tablet}) {
  }

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 0.8rem;
  }
`;
