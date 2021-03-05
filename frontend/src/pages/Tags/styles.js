import styled from 'styled-components';

export const TagCard = styled.div`
  align-items: center;
  display: flex;
  border: 1px solid transparent;
  border-radius: 5px;
  justify-content: space-between;
  padding: .45rem .8rem;

  @media screen and (max-width: 767px) {
    flex-basis: 100%;
    margin-bottom: 1rem;
  }

  @media screen and (min-width: 768px) {
    flex-basis: 46%;
    margin-bottom: 2rem;
  }

  @media screen and (min-width: 1024px) {
    flex-basis: 32%;
  }

  @media screen and (min-width: 1200px) {
    flex-basis: 30%;
  }
`;

export const TagQty = styled.p`
  font-weight: 500;
  margin: 0;
`;

export const TagCounter = styled.p`
  font-size: .8rem;
  font-weight: 500;
  margin: .4rem 0 0;
`;
