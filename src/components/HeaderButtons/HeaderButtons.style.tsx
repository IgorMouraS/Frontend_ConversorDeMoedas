import styled from 'styled-components';

import breakpoints from '../../styles/breakpoints.style';

export const Container_S = styled.div`
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

export const Button_S = styled.button`
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

export const ThemeIcon_S = styled.i`
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

// ----------------------- History

export const ContainerHistory_S = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
  position: relative;
`;

export const ButtonHistory_S = styled.button`
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

export const List_S = styled.div`
  border: ${({ theme }) => theme.border.historyList};
  border-radius: 25px;
  left: 180%;
  list-style-type: none;
  margin-top: 0.6rem;
  overflow: hidden;
  padding: 0;
  position: absolute;
  top: -30%;
  z-index: 10;

  /* Responsividade */
  @media (max-width: ${breakpoints.mobile}) {
    left: -150%;
    top: 100%;
  }
`;

export const Line_S = styled.p`
  align-items: center;
  background-color: ${({ theme }) => theme.background_color.historyLine};
  border: ${({ theme }) => theme.border.historyList};
  box-shadow: ${({ theme }) => theme.box_shadow.historyLine};
  color: ${({ theme }) => theme.color.text};
  display: flex;
  font-size: 1rem;
  gap: 14px;
  justify-content: center;
  padding: 0.4rem 0.6rem;
  text-align: center;
  white-space: nowrap;

  /* Responsividade */
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.8rem;
    white-space: wrap;
  }
`;

export const HistoryIcon_S = styled.i`
  color: ${({ theme }) => theme.color.text};
  font-size: 2rem;
  margin-bottom: 1.5rem;

  /* Responsividade */
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.7rem;
  }

  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    font-size: 1.7rem;
  }

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 2rem;
  }
`;

export const ConversionIcon_S = styled.i`
  background-color: transparent;
  color: ${({ theme }) => theme.color.text};
  font-size: 1rem;
  svg {
    fill: currentColor;
    background: none;
  }
`;
