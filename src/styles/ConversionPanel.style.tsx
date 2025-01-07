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
  background-color: ${({ theme, $error }) =>
    $error ? '#ffc2c2' : theme.background_color.conversionField};
  border: none;
  border-radius: 25px;
  box-shadow: ${({ theme }) => theme.box_shadow.conversionField};
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Select = styled.select`
  background-color: ${({ theme }) =>
    theme.background_color.convertionSelectPrimary};
  border: none;
  border-radius: 50px 25px 25px 50px;
  box-shadow: ${({ theme }) => theme.box_shadow.convertionSelectPrimary};
  font-size: 1.2rem;
  padding: 1rem 1rem;
  text-align: center;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: ${({ theme }) =>
      theme.background_color.convertionSelectSecundary};
    box-shadow: ${({ theme }) => theme.box_shadow.convertionSelectSecundary};
    cursor: pointer;
  }

  &:active {
    background-color: ${({ theme }) =>
      theme.background_color.convertionSelectTertiary};
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
  color: ${({ theme }) => theme.color.text};
  font-size: 1.2rem;
  text-align: center;

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
  color: ${({ theme }) => theme.color.buttonPrimary};
  cursor: pointer;
  padding: 0;
  transition: transform 0.3s ease;

  &:focus {
    outline: none;
  }

  &:hover,
  &:hover * {
    transform: scale(1.1);
    color: ${({ theme }) => theme.color.buttonSecundary};
  }

  &:active,
  &:active * {
    color: ${({ theme }) => theme.color.buttonTertiary};
    cursor: wait;
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
  color: ${({ theme }) => theme.color.errorText};
  font-size: 0.8rem;
  margin-left: 3.2rem;
  margin-top: 0.5rem;

  /* Responsividade */
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.8rem;
    margin-left: 2.5rem;
  }

  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    font-size: 0.7rem;
    margin-left: 1.2rem;
  }

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 0.9rem;
    margin-left: 3rem;
  }
`;
