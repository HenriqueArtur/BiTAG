import styled from 'styled-components';

import { LinkPrimary } from '../../components/LinkButton';

export const GameActions = styled.div`
  display: none;
  flex-direction: column;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);

  button,
  a {
    padding: .7rem 2rem;

    & + button,
    & + a {
      margin-top: .8rem;
    }

  }
`;

export const ImageWrapper = styled.div`
  border-radius: 10px;
  display: flex;
  overflow: hidden;
  position: relative;
`;


export const GameCard = styled.div`
  align-items: center;
  display: flex;
  border: 1px solid transparent;
  border-radius: 5px;
  flex-direction: column;
  justify-content: space-between;

  ${ImageWrapper} {
    background-color: ${props => props.selected ? "var(--main-color-light)" : "transparent"};
    border: 2px solid ${props => props.selected ? "var(--main-color)" : "transparent"};

    > img {
      z-index: -1;
    }

    &:hover {
      background-color: ${props => props.selected ? "var(--main-color-light)" : "var(--main-color-lighter)"};
      border: 2px solid var(--main-color);

      > img {
        z-index: -1;
      }

      ${GameActions} {
        display: flex;
      }
    }
  }
`;

export const GameInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: .5rem 0 0;
  width: 100%;

  h3 {
    font-size: 1rem;
  }

  p {
    color: var(--main-color);
    font-size: .9rem;
    margin: 0;
  }
`;

export const ViewGame = styled(LinkPrimary)`
  display: flex;
  justify-content: center;
`;

export const GameSelected = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-50%, -50%);

  svg {
    border: 1px solid var(--color-black);
    border-radius: 50%;
  }

  h3 {
    color: var(--color-black);
    font-size: 1rem;
    font-weight: 700;
    margin: .5rem 0 0;
    text-transform: uppercase;
  }
`;


// Background
export const ListTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
`;

export const Background = styled.div`
  margin-bottom: 4rem;
  margin-top: -13.5rem;
  position: relative;

  > img {
    display: block;
    height: 100vh;
    margin: 0 auto;
    max-width: 1920px;
    width: 100%;
  }

  > div {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);

    > h1 {
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
      font-size: 4rem;
      font-weight: 400;
      line-height: 1;
      letter-spacing: 0.1em;
      margin-bottom: 1rem;
      padding-bottom: 1rem;
      text-align: center;
      width: 90%;
    }

    > p {
      font-size: 0.9rem;
      margin: 0;
      text-align: center;
    }

    > a {
      background-color: transparent;
      border: 0;
      color: var(--color-white);
      font-size: 4rem;
      margin-top: 1rem;

      svg {
        border-radius: 50%;
        box-shadow: 0 0 0 0 rgba(255, 255, 255, .5);

        animation: move 2.5s infinite;

        &:hover {
          animation: none;
        }
      }
    }
  }

  @media(max-width: 768px) {
    margin-top: -7.5rem;
  }
`;
