import styled from 'styled-components';

import { ButtonPrimary } from '../../components/CustomButton';

export const GameColumn = styled.div`
  border-bottom: 1px solid var(--color-light);
  margin: 0 0 3rem;
  padding: 0 0 1rem;
`;

export const GameMetric = styled.div`
  display: flex;

  h3 {
    color: var(--main-color);
    font-size: 1.1rem;
    margin: 0 .2rem 0 0;
  }

  p {
    color: var(--color-white);
    font-size: 1.1rem;
    font-weight: 700;
    letter-spacing: 0.01em;
    margin: 0;
  }

  * + & {
    margin-top: .3rem;
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
  display: flex;
  margin: 1rem 0 0;

  h3 {
    color: var(--main-color);
    font-size: 1rem;
    margin: 0 .2rem 0 0;
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

export const MetricCard = styled.div`
  background-color: #69f052;
  display: flex;
  margin-bottom: 3rem;
  position: relative;

  > div {
    background-color: #b8e1f4;
    color: var(--color-gray);
    height: 100%;
    margin-left: -.4rem;
    margin-top: -.4rem;
    padding: .5rem 2rem 2.5rem;
    text-align: right;
    width: 100%;

    > div {
      align-items: center;
      background-color: #69f052;
      display: flex;
      height: 4rem;
      justify-content: center;
      left: 5%;
      position: absolute;
      top: -20%;
      width: 4rem;

      > svg {
        color: var(--color-white);
        font-size: 1.8rem;
      }
    }

    > h3 {
      font-size: 1rem;
      font-weight: 300;
      margin: 0 0 .2rem;
    }

    > span {
      font-size: 1.5rem;
      font-weight: 700;
    }
  }

  @media screen and (max-width: 768px) {
    flex-basis: 60%;
  }

  @media screen and (min-width: 768px) {
    flex-basis: 40%;
  }

  @media screen and (min-width: 1024px) {
    flex-basis: 35%;
  }
`;

export const MetricWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: .5rem;
  width: 100%;

  ${MetricCard} {
    &:nth-child(2) {
      background-color: #51f08e;

      > div {
        > div {
          background-color: #51f08e;
        }
      }
    }

    &:nth-child(3) {
      background-color: #e8b731;

      > div {
        > div {
          background-color: #e8b731;
        }
      }
    }

    &:nth-child(4) {
      background-color: #35d9e8;

      > div {
        > div {
          background-color: #35d9e8;
        }
      }
    }

    &:nth-child(5) {
      background-color: #6666ff;

      > div {
        > div {
          background-color: #6666ff;
        }
      }
    }

    &:nth-child(6) {
      background-color: #f96675;

      > div {
        > div {
          background-color: #f96675;
        }
      }
    }
  }

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }
`;
