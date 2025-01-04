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

export const ThemeIcon = styled.i`
  color: #1e1e1e;
  display: flex;
  font-size: 2.4rem;
  justify-content: flex-end;

  &.dark {
    color: #d5d5d5;
  }

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
