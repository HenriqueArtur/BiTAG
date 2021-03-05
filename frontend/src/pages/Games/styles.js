import styled from 'styled-components';

export const GameCard = styled.div`
  align-items: center;
  display: flex;
  border: 1px solid transparent;
  border-radius: 5px;
  flex-direction: column;
  justify-content: space-between;
`;

export const ImageWrapper = styled.div`
  border: 2px solid transparent;
  border-radius: 10px;
  display: flex;
  overflow: hidden;
  position: relative;

  &:hover {
    background-color: rgba(102, 252, 241, 0.5);
    border-color: var(--main-color);

    > img {
      z-index: -1;
    }

    > div {
      display: flex;
    }
  }
`;

export const GameActions = styled.div`
  display: none;
  flex-direction: column;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);

  button {
    padding: .7rem 2rem;

    & + button {
      margin-top: .8rem;
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
