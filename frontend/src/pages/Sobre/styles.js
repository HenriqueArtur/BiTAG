import styled from 'styled-components';

export const Logo = styled.img`
  max-width: 280px;

  @media screen and (max-width: 400px) {
    max-width: 250px;
  }
`;

export const Info = styled.div`
  p {
    font-size: 1rem;
    margin: 0;
    text-align: center;

    & + p {
      margin-top: 2rem;
    }
  }

  strong {
    display: block;
    font-weight: 600;
    margin: 1.6rem 0 0;
    text-align: center;
  }

  @media screen and (min-width: 1024px) {
    margin: 0 auto;
    max-width: 60%;
  }
`;

export const Credits = styled.strong`
  display: block;
  font-weight: 600;
  margin: 3rem 0 0;
  text-align: center;

  span {
    color: var(--main-color);
  }
`;

