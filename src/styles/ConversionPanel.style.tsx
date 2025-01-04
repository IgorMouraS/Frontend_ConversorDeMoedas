import styled from 'styled-components';

import breakpoints from './breakpoints.style';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 3rem;
  justify-content: center;
  padding: 0 2rem;

  /* Responsividade */
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    gap: 1rem;
    padding: 0 1rem;
  }

  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    gap: 1rem;
    padding: 0 1rem;
  }

  @media (min-width: ${breakpoints.desktop}) {
    gap: 4rem;
    padding: 0 2rem;
  }
`;

export const ConversionField = styled.div<{ $error: boolean }>`
  align-items: center;
  background-color: ${(props) => (props.$error ? '#ffc2c2' : '#e4e4e4')};
  border: none;
  border-radius: 25px;
  box-shadow:
    4px 4px 10px rgba(0, 0, 0, 0.15),
    inset -2px 1px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  justify-content: center;

  &.dark {
    background-color: ${(props) => (props.$error ? '#ffc2c2' : '#9d9d9d')};
    box-shadow:
      4px 4px 10px rgba(0, 0, 0, 0.5),
      inset -2px 1px 4px rgba(0, 0, 0, 0.8);
  }
`;

export const Select = styled.select`
  background-color: #dddddd;
  border: none;
  border-radius: 50px 25px 25px 50px;
  box-shadow: inset -1px 1px 2px rgba(0, 0, 0, 0.3);
  font-size: 1.2rem;
  padding: 1rem 1rem;
  text-align: center;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: #70ff70;
    box-shadow: inset -1px 1px 2px rgba(0, 58, 0, 0.5);
    cursor: pointer;
  }

  &:active {
    background-color: #00eb00;
  }

  &.dark {
    background-color: #c0c0c0;
    box-shadow: inset -1px 1px 2px rgba(0, 0, 0, 0.8);

    &:hover {
      background-color: #50ff50;
      box-shadow: inset -1px 1px 2px rgba(0, 58, 0, 0.8);
    }

    &:active {
      background-color: #00ce00;
    }
  }

  /* Responsividade */
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.4rem;
    padding: 1.3rem 0.5rem;
  }

  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    font-size: 0.8rem;
    padding: 0.8rem 0.2rem;
  }

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 1.2rem;
    padding: 1.5rem 2rem;
  }
`;

export const Option = styled.option`
  color: #1e1e1e;
  font-size: 1.2rem;
  text-align: center;

  &.dark {
    color: #d5d5d5;
  }

  /* Responsividade */
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.4rem;
  }

  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    font-size: 0.8rem;
  }

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 1.2rem;
  }
`;

export const Button = styled.button`
  background: none;
  border: none;
  color: #008800;
  cursor: pointer;
  padding: 0;
  transition: transform 0.3s ease;

  &:focus {
    outline: none;
  }

  &:hover {
    transform: scale(1.2);
  }
  &:hover,
  &:hover * {
    color: #00c500;
  }

  &:active,
  &:active * {
    color: #00c500;
    cursor: wait;
  }

  &.dark {
    color: #00c700;

    &:hover,
    &:hover * {
      color: #00f200;
    }

    &:active,
    &:active * {
      color: #6aff6a;
    }
  }
`;

export const Text = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-align: center;

  /* Responsividade */
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.8rem;
    margin-bottom: 0.4rem;
  }

  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    font-size: 0.8rem;
    margin-bottom: 0.4rem;
  }
`;

export const Icon = styled.i`
  font-size: 1.6rem;

  /* Responsividade */
  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    font-size: 1.2rem;
  }
`;

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ErrorText = styled.p`
  color: #c20000;
  font-size: 0.9rem;
  margin-left: 1.6rem;
  margin-top: 0.5rem;

  &.dark {
    color: #ff4343;
  }
`;
