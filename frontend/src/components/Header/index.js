import React, { useState } from 'react';

import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import user from '../../assets/user.png';
import ModalLogin from '../ModalLogin';

import * as S from './styles';

const Header = (props) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <S.NavbarHeader collapseOnSelect className="mb-5" expand="lg" variant="dark">
        <S.NavContainer>
          <Navbar.Brand>
            <Link to="/">
              <S.Logo className="d-inline-block align-top" src={logo} alt="BiTag logo" />
              <span className="ml-2 text-white">{props.title}</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse className="mt-4" id="responsive-navbar-nav">
            <Nav>
              <S.NavbarDropdown title="Descubra" id="basic-nav-dropdown">
                <S.NavLink to="tags">Tags</S.NavLink>
                <S.NavLink to="tags">Jogos</S.NavLink>
              </S.NavbarDropdown>
              <S.NavLink to="/tags">
                Recente
              </S.NavLink>
              <S.NavLink to="/tags">
                Sobre
              </S.NavLink>
            </Nav>
          </Navbar.Collapse>

          <S.UserButton variant="primary" onClick={() => setModalShow(true)}>
            <img src={user} alt="User profile" />
          </S.UserButton>

          <ModalLogin
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </S.NavContainer>
      </S.NavbarHeader>
    </>
  );
}

export default Header;
