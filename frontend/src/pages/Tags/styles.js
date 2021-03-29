import styled from 'styled-components';

export const DataTitle = styled.p`
  color: var(--main-color);
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
  text-align: center;
`;

export const TagQty = styled.p`
  font-weight: 500;
  margin: 0;
`;

export const TagActions = styled.div`
  align-items: flex-start;
  display: none;
  flex: 1 1 100%;
  flex-direction: column;
  left: 50%;
  margin: .25rem 0 0;
  position: absolute;
  top: 95%;
  transform: translateX(-50%);
  transition: opacity 0.5s;
  width: 95%;

  > button {
    font-size: .8rem;
    padding: .2rem .6rem;
    text-align: left;
    width: 100%;
  }

  > a {
    font-size: .7rem;
    margin-top: .2rem;
    padding: .1rem .6rem;
  }
`;

export const TagCard = styled.div`
  align-items: center;
  display: flex;
  border: 1px solid ${props => props.bordered ? "var(--main-color)" : "var(--color-gray)"};
  border-radius: 5px;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: .8rem .6rem;
  position: relative;

  > svg {
    border: 2px solid var(--main-color);
    border-radius: 50%;
    color: var(--main-color);
    left: -1.8rem;
    position: absolute;
  }

  &:hover {
    ${TagActions} {
      display: flex;
    }
  }

  @media screen and (max-width: 767px) {
    flex-basis: 100%;
    margin-bottom: 2.5rem;
    padding: 1rem .6rem;
  }

  @media screen and (min-width: 768px) {
    flex-basis: 46%;
    margin-bottom: 3em;
  }

  @media screen and (min-width: 1200px) {
    flex-basis: 30%;
  }
`;

export const TagCounter = styled.p`
  font-size: .8rem;
  font-weight: 500;
  margin: .4rem 0 0;
`;
