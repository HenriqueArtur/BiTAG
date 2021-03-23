import styled from 'styled-components';

import { Modal } from 'react-bootstrap';

export const ModalUser = styled(Modal)`
  color: var(--color-black);

  .modal-dialog {
    @media screen and (min-width: 768px) {
      max-width: 65%;
    }
  }

  .modal-content {
    border: 3px solid var(--main-color);
    background-clip: unset;
    border-radius: 10px;
    overflow: hidden;

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
      display: flex;
      padding: 0;

      @media screen and (max-width: 767px) {
        flex-wrap: wrap;
      }
    }
  }
`;

export const UserSidebar = styled.div`
  background-color: var(--main-color);
  flex-basis: 22%;
  padding: 4rem 1.5rem;

  @media screen and (max-width: 767px) {
    flex-basis: 100%;
    padding: 1.5rem 1.5rem;
  }
`;

export const UserIcon = styled.div`
  background-color: var(--color-white);
  border: none;
  border-radius: 50%;
  height: 80px;
  margin: 0 auto;
  overflow: hidden;
  padding: 0;
  width: 80px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  &:hover,
  &:focus,
  &:not(:disabled):not(.disabled):active {
    background-color: var(--color-white);
    box-shadow: none;
  }
`;

export const UserNav = styled.nav`
  margin-top: 1.2rem;

  ul {
    list-style-type: none;
    margin: 0;

    li {
      padding: .5rem 0;

      button {
        background-color: transparent;
        border: none;
        font-weight: 700;
        text-align: left;
      }

      @media screen and (max-width: 767px) {
        text-align: center;
      }
    }
  }
`;

export const MainAccount = styled.div`
  flex-basis: 78%;
  padding: 4rem 1.5rem;

  > h1 {
    font-size: 2rem;
    font-weight: 700;
    margin: 0 0 2.5rem;

    @media screen and (max-width: 767px) {
      text-align: center;
    }
  }

  > .cancel {
    max-height: 40px;
    padding: .4rem 2rem;
    position: relative;
    z-index: 2;

    @media screen and (max-width: 767px) {
      margin-top: -4rem;
    }

    @media screen and (min-width: 768px) {
      margin-top: -4rem;
    }
  }

  @media screen and (max-width: 767px) {
    flex-basis: 100%;
    padding: 1.5rem 1.5rem;
  }
`;
