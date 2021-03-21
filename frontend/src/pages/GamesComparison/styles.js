import styled from 'styled-components';

import { ButtonPrimary } from '../../components/CustomButton';

export const GameMetric = styled.div`
  h3 {
    font-size: 1rem;
    margin: 0 0 .8rem;
  }

  p {
    color: var(--main-color);
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 0.01em;
    margin: 0;
  }

  * + & {
    margin-top: 2.5rem;
  }
`;

export const InfoHeading = styled.div`
  border-bottom: 1px solid var(--main-color);
  margin: 0 0 .8rem;
  padding: 0 0 .8rem;

  h3 {
    font-size: .9rem;
    text-transform: uppercase;
    margin: 0;
  }
`;

export const GameData = styled.div`
  h3 {
    font-size: 1rem;
    margin: 0 0 .8rem;
  }

  p {
    color: var(--main-color);
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 0.01em;
    margin: 0;
    text-align: center;
  }
`;


export const GameText = styled.div`
  margin: 2.5rem 0 0;

  h3 {
    color: var(--main-color);
    font-size: 1rem;
    margin: 0 0 .8rem;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    margin: 0;
    text-align: left;
  }
`;

export const BackButton = styled(ButtonPrimary)`
  background-color: transparent;
  color: var(--color-white) !important;
  font-weight: 400;
  padding: 0;

  &:hover,
  &:focus,
  &:active {
    background-color: transparent !important;
    color: var(--color-white) !important;
    text-decoration: underline !important;
  }
`;