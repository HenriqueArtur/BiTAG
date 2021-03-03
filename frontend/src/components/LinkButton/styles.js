import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const ButtonPrimary = styled(Link)`
  background-color: var(--main-color);
  color: var(--color-black) !important;
  font-weight: 700;
  text-transform: ${props => props.uppercase ? "uppercase" : "none"};

  &:hover {
    background-color: var(--main-color-darker) !important;
    color: var(--color-black) !important;
  }
`;

export const ButtonBordered = styled(Link)`
  background-color: transparent;
  border: 1px solid var(--main-color);
  border-radius: 5px;
  color: ${props => props.light ? "var(--color-light)" : "var(--color-black)"} !important;
  font-weight: 700;
  text-transform: ${props => props.uppercase ? "uppercase" : "none"};

  &:hover {
    background-color: var(--main-color) !important;
    color: var(--color-black) !important;
  }
`;


export const ButtonLight = styled(Link)`
  background-color: var(--color-white);
  border-radius: 5px;
  color: var(--color-black) !important;
  font-weight: 700;
  text-transform: ${props => props.uppercase ? "uppercase" : "none"};

  &:hover {
    background-color: var(--main-color) !important;
    color: var(--color-black) !important;
  }
`;
