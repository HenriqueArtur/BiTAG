import styled from 'styled-components';

import { Button } from 'react-bootstrap';

export const ButtonPrimary = styled(Button).attrs(props => ({
  uppercase: props.uppercase ? "uppercase" : "none",
}))`
  background-color: var(--main-color);
  border: none;
  border-radius: 5px;
  color: var(--color-black) !important;
  font-weight: 700;
  padding: .5rem 2rem;
  text-transform: ${props => props.uppercase};

  &:hover,
  &:focus,
  &.focus {
    background-color: var(--main-color-darker) !important;
    border-color: inherit;
    box-shadow: none;
    color: var(--color-black) !important;
  }
`;

export const ButtonBordered = styled(Button).attrs(props => ({
  uppercase: props.uppercase ? "uppercase" : "none",
  light: props.light ? "var(--color-light)" : "var(--main-color)",
  bold: props.bold ? "2px" : "1px"
}))`
  background-color: transparent;
  border: ${props => props.bold} solid var(--main-color);
  border-radius: 5px;
  color: ${props => props.light} !important;
  font-size: ${props => props.sm ? ".8rem" : "1rem"};
  font-weight: 700;
  padding: .5rem ${props => props.sm ? ".5rem" : "2rem"};
  text-transform: ${props => props.uppercase};

  &:hover,
  &.focus,
  &:focus {
    background-color: var(--main-color) !important;
    border-color: var(--main-color);
    box-shadow: none;
    color: var(--color-black) !important;
  }
`;


export const ButtonLight = styled(Button).attrs(props => ({
  uppercase: props.uppercase ? "uppercase" : "none",
}))`
  background-color: var(--color-white);
  border: none;
  border-radius: 5px;
  color: var(--color-black) !important;
  font-weight: 700;
  padding: .5rem 2rem;
  text-transform: ${props => props.uppercase};

  &:hover,
  &:focus,
  &.focus {
    background-color: var(--main-color) !important;
    border-color: inherit;
    box-shadow: none;
    color: var(--color-black) !important;
  }
`;
