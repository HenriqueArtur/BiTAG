import styled from 'styled-components';

import { Modal } from 'react-bootstrap';

export const ModalAuth = styled(Modal)`
  color: var(--color-black);

  .modal-dialog {
    @media screen and (min-width: 768px) {
      max-width: 400px;
    }
  }

  .modal-content {
    border: 3px solid var(--main-color);
    background-clip: unset;

    .modal-header {
      border: 0;
      justify-content: center;
      padding: 0;
      position: absolute;
      right: 1rem;
      top: 10px;
      z-index: 1;
    }

    .modal-body {
      padding: 2rem;

      form {
        .form-control {
          border-color: var(--main-color);

          &:focus {
            border-color: var(--border-color);
          }
        }
      }

      button {
        display: block;
        font-size: 1.2rem;
        margin: 0 auto;
        margin-top: 4rem;
        padding: .9rem 4rem;

        &.btn-account {
          margin-top: 1rem;
          padding: .9rem 2.5rem;
        }
      }
    }
  }
`;
