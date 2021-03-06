import React, { useState } from 'react';

import * as S from './styles';

import { Form, Modal } from 'react-bootstrap';
import InputGroup from '../InputGroup';

import { ButtonPrimary } from '../CustomButton';

const ModalLogin = (props) => {
  const [username, setUsername] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <S.ModalLogin
      animation={false}
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Form>
          <InputGroup
            label="Nome de usuário"
            controlId="username"
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="Insira seu nome de usuário"
            required="required"
          />

          <InputGroup
            label="Senha"
            controlId="senha"
            type="senha"
            value={senha}
            onChange={e => setSenha(e.target.value)}
            placeholder="Insira sua senha"
            required="required"
          />

          <ButtonPrimary>
            Login
          </ButtonPrimary>
        </Form>
      </Modal.Body>
    </S.ModalLogin>
  );
}

export default ModalLogin;
