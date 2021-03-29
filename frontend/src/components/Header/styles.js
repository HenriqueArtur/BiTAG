import styled from 'styled-components';

import { Button, Navbar, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Logo = styled.img`
  max-width: 220px;

  @media(max-width: 767px) {
    max-width: 120px;
  }
`;

export const NavbarHeader = styled(Navbar)`
  background-color: transparent;
  z-index: 1;

  .navbar-toggler {
    border-color: rgba(102, 252, 241, 0.5);

    @media(max-width: 767px) {
      margin-left: auto;
      margin-right: 10px;
      order: 1;
    }
  }

  .navbar-collapse {
    margin-right: -.5rem;
    margin-left: -.5rem;

    @media(max-width: 767px) {
      order: 3;
      padding: 0 .5rem;
    }
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  padding: .5rem .5rem;

  @media(max-width: 767px) {
    padding: .5rem 0;
  }
`;

export const NavContainer = styled(Container)`
  flex-wrap: wrap !important;
  padding: 0;

  .navbar-brand {
    @media(max-width: 767px) {
      order: 0;
    }

    @media(min-width: 768px) {
      flex: 1 1 100%;
      margin: 0;
    }
  }
`;

export const NavbarDropdown = styled(NavDropdown)`
  > a {
    &:hover {
      text-decoration: underline;
    }
  }

  .dropdown-menu {
    background-color: var(--background);
    border-color: var(--color-white);

    a {
      &:hover {
        background-color: transparent;
      }
    }

    @media(max-width: 767px) {
      padding: 0 .5rem;
    }
  }
`;

export const UserButton = styled(Button)`
  background-color: var(--color-white);
  border: none;
  border-radius: 50%;
  height: 70px;
  overflow: hidden;
  padding: 0;
  width: 70px;

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

  @media(max-width: 767px) {
    height: 50px;
    order: 2;
    width: 50px;
  }
`;
