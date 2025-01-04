import styled, { createGlobalStyle } from 'styled-components';

import breakpoints from './breakpoints.style';

export const GlobalStyle = createGlobalStyle<{ homeTheme: boolean }>`
*{
  background-color: ${({ homeTheme }) => (homeTheme ? '#1e1e1e' : '#f5f5f5')};
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
`;

export const RatesPanelContainer = styled.section`
  width: 100vw;
`;

export const HomeContainer = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const Container = styled.section`
  max-width: 800px;

  /* Responsividade */
  @media (max-width: ${breakpoints.mobile}) {
    max-width: 350px;
  }

  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    max-width: 500px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    max-width: 1100px;
  }
`;

export const TitleAndFeatures = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;
  padding: 4rem 1rem;

  /* Responsividade */
  @media (max-width: ${breakpoints.mobile}) {
    gap: 2rem;
    padding: 2rem 0.5rem;
  }

  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    padding: 5rem 1rem;
  }

  @media (min-width: ${breakpoints.desktop}) {
    padding: 6rem 2rem;
  }
`;

export const Title = styled.h1`
  color: #1e1e1e;
  font-size: 2.5rem;
  text-align: center;

  &.dark {
    color: #d5d5d5;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.8rem;
  }

  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    font-size: 2rem;
  }

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 3.2rem;
  }
`;

export const BodyContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;
  justify-content: center;
  overflow: hidden;
  padding: 3rem 0;

  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    padding: 2rem 0;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1.5rem 0;
  }
`;

export const FooterContainer = styled.footer`
  background-color: #d6d6d6;
  bottom: 0;
  position: fixed;
  width: 100%;

  &.dark {
    background-color: #121212;
    color: #d1d1d1;
  }
`;
