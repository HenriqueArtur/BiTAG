import styled from 'styled-components';

export const PaginationContainer = styled.div`
  .page-link {
    background-color: var(--background);
    border-color: var(--color-light);
  }

  .page-item {
    &.active {
      .page-link {
        background-color: var(--main-color);
        border-color: var(--main-color);
        color: var(--color-gray) !important;
      }
    }

    &.disabled {
      .page-link {
        background-color: #6c757d;
        border-color: #6c757d;
        color: var(--color-gray) !important;
        opacity: 0.5;
      }
    }
  }
`;
