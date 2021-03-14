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
  display: flex;
  flex: 1 1 100%;
  flex-direction: column;
  margin: .25rem 0 0;
  position: absolute;
  top: 70%;
  transition: opacity 0.5s;

  > button {
    padding: .1rem 2rem;
  }

  > a {
    font-size: .7rem;
    margin-top: .2rem;
  }
`;

export const TagCard = styled.div`
  align-items: center;
  display: flex;
  /* border: 1px solid ${props => props.tagSelected ? "var(--main-color)" : "transparent"}; */
  border-radius: 5px;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: .8rem .6rem;
  position: relative;

  > svg {
    border: 1px solid var(--main-color);
    border-radius: 50%;
    color: var(--main-color);
    left: -1.8rem;
    position: absolute;
  }

  /* ${TagActions} {
    ${props => props.selectedTags.length >= 2 && `
      display: none;
    `}
  } */

  /* &:hover {
    ${TagActions} {
      display: ${props => props.tagSelected ? "none" : "flex"};
    }
  } */

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
