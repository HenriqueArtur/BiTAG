import React from 'react';

import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';

import { useLocation } from 'react-router-dom';

import * as S from './styles';

const Header = (props) => {
  const location = useLocation();

  return (
    <>
      <S.NavbarHeader collapseOnSelect className="mb-5" expand="lg" variant="dark">
        <S.NavContainer>
          {
            location.pathname !== "/" && (
              <Navbar.Brand>
                <Link to="/">
                  <S.Logo className="d-inline-block align-top" src={logo} alt="BiTag logo" />
                  <span className="ml-2 text-white">{props.title}</span>
                </Link>
              </Navbar.Brand>
            )
          }

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse className="mt-4" id="responsive-navbar-nav">
            <Nav>
              <S.NavLink to="/tags">Tags</S.NavLink>
              <S.NavLink to="/games">Jogos</S.NavLink>
              <S.NavLink to="/sobre">Sobre</S.NavLink>
            </Nav>
          </Navbar.Collapse>
        </S.NavContainer>
      </S.NavbarHeader>
    </>
  );
}

export default Header;
