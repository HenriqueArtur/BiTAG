import React from 'react';
import { Col } from 'react-bootstrap';

import * as S from './styles';

const ShowProfile = () => {
  return (
    <>
      <Col md="6">
        <S.Info>
          <label>Nome</label>
        </S.Info>
        <S.Info>
          <label>Sobrenome</label>
        </S.Info>
        <S.Info>
          <label>Nome de usuário</label>
        </S.Info>
        <S.Info>
          <label>Email</label>
        </S.Info>
        <S.Info>
          <label>Senha</label>
        </S.Info>
        <S.Info>
          <label>Nome do usuário</label>
        </S.Info>
      </Col>

      <Col md="6">
        <S.Info>
          <p>Fulano</p>
        </S.Info>
        <S.Info>
          <p>De Tal</p>
        </S.Info>
        <S.Info>
          <p>exemplouser</p>
        </S.Info>
        <S.Info>
          <p>exemplo@gmail.com</p>
        </S.Info>
        <S.Info>
          <p>*******</p>
        </S.Info>
        <S.Info>
          <p>exemplo@gmail.com</p>
        </S.Info>
      </Col>
    </>
  );
}

export default ShowProfile;
