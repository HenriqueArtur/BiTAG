import styled from 'styled-components';

import { Button } from 'react-bootstrap';

export const ButtonPrimary = styled(Button)`
  background-color: var(--main-color);
  border: none;
  color: var(--color-black) !important;
  font-weight: 700;
  padding: .5rem 2rem;
  text-transform: ${props => props.uppercase ? "uppercase" : "none"};

  &:hover {
    background-color: var(--main-color-darker) !important;
    color: var(--color-black) !important;
  }
`;

export const ButtonBordered = styled(Button)`
  background-color: transparent;
  border: 1px solid var(--main-color);
  border-radius: 5px;
  color: ${props => props.light ? "var(--color-light)" : "var(--main-color)"} !important;
  font-size: ${props => props.sm ? ".8rem" : "1rem"};
  font-weight: 700;
  padding: .5rem ${props => props.sm ? ".5rem" : "2rem"};
  text-transform: ${props => props.uppercase ? "uppercase" : "none"};

  &:hover {
    background-color: var(--main-color) !important;
    color: var(--color-black) !important;
  }
`;


export const ButtonLight = styled(Button)`
  background-color: var(--color-white);
  border: none;
  border-radius: 5px;
  color: var(--color-black) !important;
  font-weight: 700;
  padding: .5rem 2rem;
  text-transform: ${props => props.uppercase ? "uppercase" : "none"};

  &:hover {
    background-color: var(--main-color) !important;
    color: var(--color-black) !important;
  }
`;
