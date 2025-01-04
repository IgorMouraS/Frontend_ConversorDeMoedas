import styled from 'styled-components';

import breakpoints from './breakpoints.style';

export const Input = styled.input`
  background-color: transparent;
  border: none;
  font-size: 1rem;
  padding: 1rem 1rem;
  text-align: center;
  width: 150px;

  &:focus {
    border: none;
    outline: none;
  }

  &:active {
    cursor: not-allowed;
  }

  /* Responsividade */
  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    font-size: 0.8rem;
    padding: 0.8rem 0.8rem;
    width: 120px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 1.5rem;
    padding: 1.5rem 2rem;
    width: 250px;
  }
`;
