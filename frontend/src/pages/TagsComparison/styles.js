import styled from 'styled-components';


export const THead = styled.th`
  color: var(--color-white);
  font-size: 1rem;
  text-align: center;
`;

export const TRow = styled.tr`
  border-bottom: 1px solid var(--main-color);

  ${THead} {
    vertical-align: middle;
  }

  th:first-of-type {
    color: var(--main-color);
  }
`;

export const TData = styled.td`
  color: var(--main-color);
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  vertical-align: middle !important;
`;

export const DataTitle = styled.td`
  color: var(--color-white);
  font-size: 1.4rem;
  font-weight: 700;
  text-align: center;
`;
