import styled from 'styled-components';


export const THead = styled.th`
  color: var(--color-white);
  text-align: center;
`;

export const TRow = styled.tr`
  border-bottom: 1px solid var(--main-color);

  th:last-of-type {
    color: var(--main-color);
  }
`;

export const TData = styled.td`
  color: var(--main-color);
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
`;

export const DataTitle = styled.td`
  color: var(--color-white);
  font-size: 1.6rem;
  font-weight: 700;
  text-align: center;
`;
