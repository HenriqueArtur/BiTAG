import styled from 'styled-components';

export const Info = styled.div`
  > label {
    color: var(--color-light);
    display: block;
    margin: 0 0 1rem;

    @media screen and (min-width: 768px) {
      flex-basis: 50%;
    }
  }

  > p {
    display: block;
    font-weight: 700;
    margin: 0 0 1rem;

    @media screen and (min-width: 768px) {
      flex-basis: 50%;
    }
  }


  @media screen and (min-width: 768px) {
    display: flex;
    width: 100%;
  }
`;
