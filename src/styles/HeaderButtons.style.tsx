import styled from 'styled-components';

import breakpoints from './breakpoints.style';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 750px;

  /* Responsividade */
  @media (max-width: ${breakpoints.mobile}) {
    min-width: 300px;
  }

  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    min-width: 480px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    min-width: 900px;
  }
`;

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: transform 0.3s ease;

  &:focus {
    outline: none;
  }

  &:hover {
    transform: scale(1.1);
  }
  &:hover,
  &:hover * {
    color: ${({ theme }) => theme.color.buttonPrimary};
  }

  &:active,
  &:active * {
    color: ${({ theme }) => theme.color.buttonSecundary};
    cursor: wait;
  }
`;

export const ThemeIcon = styled.i`
  color: ${({ theme }) => theme.color.text};
  display: flex;
  font-size: 2.4rem;
  justify-content: flex-end;

  /* Responsividade */
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 2rem;
  }

  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    font-size: 2rem;
  }

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 2.4rem;
  }
`;
