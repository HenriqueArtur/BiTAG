import styled from 'styled-components';


export const THead = styled.th`
  color: var(--color-white);
  font-size: .8rem;
  text-align: center;
`;

export const TRow = styled.tr`
  border-bottom: 1px solid var(--color-light);

  ${THead} {
    vertical-align: middle;
  }

  th:first-of-type,
  th:nth-child(2) {
    color: #5959e0;
  }

  th:nth-child(3) {
    color: #c00563;
  }

  th:nth-child(4) {
    color: #b02d37;
  }

  th:nth-child(5) {
    color: #d26201;
  }

  th:nth-child(6) {
    color: #e6cb03;
  }

  th:nth-child(7) {
    color: #41e502;
  }

  th:nth-child(8) {
    color: #3bda6d;
  }

  th:nth-child(9) {
    color: #41f8d6;
  }

  th:nth-child(10) {
    color: #2bbfe7;
  }
`;

export const TData = styled.td`
  color: #b6dff2;
  font-size: 1.2rem;
  font-weight: 700;
  text-align: center;
  vertical-align: middle !important;

  &:nth-child(2) {
    color: #5959e0;
  }
`;

export const DataTitle = styled.td`
  color: var(--color-white);
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
`;
