import styled from 'styled-components';

export const Info = styled.div`
  align-items: center;

  > label {
    color: var(--color-light);
    margin: 0;

    @media screen and (min-width: 768px) {
      flex-basis: 50%;
    }
  }

  .form-file,
  .form-control {
    &:focus {
      border-color: var(--main-color);
    }

    @media screen and (min-width: 768px) {
      flex-basis: 50%;
    }
  }

  & + & {
    margin-top: .5rem;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    width: 100%;
  }
`;
