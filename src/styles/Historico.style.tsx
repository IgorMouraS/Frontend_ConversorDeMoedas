import styled from 'styled-components';

import breakpoints from './breakpoints.style';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
  position: relative;
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
    color: #008800;
  }

  &:active,
  &:active * {
    color: #00c500;
    cursor: wait;
  }

  &.dark {
    &:hover,
    &:hover * {
      color: #00c700;
    }

    &:active,
    &:active * {
      color: #00f200;
    }
  }
`;

export const Lista = styled.div`
  border: 1px solid #d5d5d5;
  border-radius: 25px;
  left: 180%;
  list-style-type: none;
  margin-top: 0.6rem;
  overflow: hidden;
  padding: 0;
  position: absolute;
  top: -30%;
  z-index: 10;

  &.dark {
    border: 2px solid #1e1e1e;
  }

  /* Responsividade */
  @media (max-width: ${breakpoints.mobile}) {
    left: -150%;
    top: 100%;
  }
`;

export const Linha = styled.p`
  align-items: center;
  background-color: #ececec;
  border: 1px solid #d5d5d5;
  box-shadow:
    inset 1px 1px 2px rgba(0, 0, 0, 0.1),
    inset -2px -2px 4px rgba(235, 255, 203, 0.3);
  color: #1e1e1e;
  display: flex;
  font-size: 1rem;
  gap: 14px;
  justify-content: center;
  padding: 0.4rem 0.6rem;
  text-align: center;
  white-space: nowrap;

  &.dark {
    background-color: #585858;
    border: 1px solid #1e1e1e;
    box-shadow:
      inset -2px -2px 2px rgba(0, 0, 0, 0.1),
      inset 2px 2px 4px rgba(235, 255, 203, 0.3);
    color: #d5d5d5;
  }

  /* Responsividade */
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.8rem;
    white-space: wrap;
  }
`;

export const IconHistorico = styled.i`
  color: #1e1e1e;
  font-size: 2rem;
  margin-bottom: 1.5rem;

  &.dark {
    color: #d5d5d5;
  }
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

export const IconConversao = styled.i`
  background-color: transparent;
  color: #1e1e1e;
  font-size: 1rem;
  svg {
    fill: currentColor;
    background: none;
  }

  &.dark {
    color: #d5d5d5;
  }
`;
