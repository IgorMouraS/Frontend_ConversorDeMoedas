import styled from 'styled-components';

const breakpoints = {
  mobile: '510px',
  tablet: '790px',
  desktop: '1024px',
};

export const Input = styled.input`
  background-color: transparent;
  padding: 1rem 1rem;
  font-size: 1rem;
  text-align: center;
  border: none;
  width: 150px;

  &:focus {
    outline: none;
    border: none;
  }

  &:active {
    cursor: not-allowed;
  }

  /* Responsividade */
  @media (max-width: ${breakpoints.mobile}) {
  }

  @media (min-width: ${breakpoints.mobile}) and max-width: ${breakpoints.tablet}) {
    padding: 0.8rem 0.8rem;
    font-size: 0.8rem;
    width: 120px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 1.5rem;
    padding: 1.5rem 2rem;
    width: 250px;
  }
`;
