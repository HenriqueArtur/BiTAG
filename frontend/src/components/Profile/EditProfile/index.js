import React, { useState } from 'react';

import { Col, Row } from 'react-bootstrap';

import { ButtonBordered, ButtonPrimary } from '../../CustomButton';

import * as S from './styles';

const EditProfile = () => {
  const [toggle, setToggle] = useState(false);

  function handleToggleAccount () {
    setToggle(!toggle);
  }

  return (
    <S.EditAccount>
      <h3>Editando Perfil</h3>

      <Row>
        <Col md="12" className="d-flex justify-content-between">
          <S.Info>
            <label>Nome</label>
            <p>Fulano</p>
          </S.Info>

        </Col>

        <Col md="12" className="d-flex justify-content-between">
          <S.Info>
            <label>Sobrenome</label>
            <p>De Tal</p>
          </S.Info>
        </Col>

        <Col md="12" className="d-flex justify-content-between">
          <S.Info>
            <label>Nome de usuário</label>
            <p>exemplouser</p>
          </S.Info>
        </Col>

        <Col md="12" className="d-flex justify-content-between">
          <S.Info>
            <label>Email</label>
            <p>exemplo@gmail.com</p>
          </S.Info>
        </Col>

        <Col md="12" className="d-flex justify-content-between">
          <S.Info>
            <label>Senha</label>
            <p>*******</p>
          </S.Info>
        </Col>

        <Col md="12" className="d-flex justify-content-between">
          <S.Info>
            <label>Nome do usuário</label>
            <p>exemplo@gmail.com</p>
          </S.Info>
        </Col>

        <Col className="d-flex justify-content-between">
          <ButtonPrimary className="ml-auto">
            Salvar
          </ButtonPrimary>
        </Col>
      </Row>

    </S.EditAccount>
  );
}

export default EditProfile;
