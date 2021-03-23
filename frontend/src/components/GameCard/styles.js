import styled from 'styled-components';

export const GameCard = styled.div`
  align-items: flex-start;
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
