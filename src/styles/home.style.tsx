import styled, { createGlobalStyle } from 'styled-components';

const breakpoints = {
  mobile: '510px',
  tablet: '790px',
  desktop: '1024px',
};

export const GlobalStyle = createGlobalStyle<{ isDark: boolean }>`
*{
  background-color: ${({ isDark }) => (isDark ? '#1e1e1e' : '#f5f5f5')};
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}
`;

export const PainelDeTaxasContainer = styled.section`
  width: 100vw;
`;

export const HomeContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.section`
  max-width: 800px;

  /* Responsividade */
  @media (max-width: ${breakpoints.mobile}) {
    max-width: 350px;
  }

  @media (min-width: ${breakpoints.mobile}) and max-width: ${breakpoints.tablet}) {
    max-width: 500px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    max-width: 1100px;
  }
`;

export const TituloEFuncionalidades = styled.section`
  padding: 4rem 1rem;
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* Responsividade */
  @media (max-width: ${breakpoints.mobile}) {
    padding: 2rem 0.5rem;
    gap: 2rem;
  }

  @media (min-width: ${breakpoints.mobile}) and max-width: ${breakpoints.tablet}) {
    padding: 5rem 1rem;
  }

  @media (min-width: ${breakpoints.desktop}) {
    padding: 6rem 2rem;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #1e1e1e;
  text-align: center;

  &.dark {
    color: #d5d5d5;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.8rem;
  }

  @media (min-width: ${breakpoints.mobile}) and max-width: ${breakpoints.tablet}) {
    font-size: 2rem;
  }

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 3.2rem;
  }
`;

export const BodyContainer = styled.div`
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Arial, sans-serif;
  overflow: hidden;

  @media (min-width: ${breakpoints.mobile}) and max-width: ${breakpoints.tablet}) {
    padding: 2rem 0;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1.5rem 0;
  }
`;

export const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #d6d6d6;

  &.dark {
    background-color: #121212;
    color: #d1d1d1;
  }
`;
