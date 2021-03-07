import React, { useState } from 'react';

import * as S from './styles';

import { Modal } from 'react-bootstrap';

import { ButtonPrimary, ButtonBordered } from '../CustomButton';
import CreateAccount from '../Auth/CreateAccount';
import LoginAccount from '../Auth/LoginAccount';

const ModalAuth = (props) => {
  const [toggleAuth, setToggleAuth] = useState(false);

  function handleToggleAuth () {
    setToggleAuth(!toggleAuth);
  }

  return (
    <S.ModalAuth
      animation={false}
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton />
      <Modal.Body>
        {
          toggleAuth ?
            <>
              <CreateAccount />
              <ButtonPrimary form="form-create" type="submit">
                Cadastrar
              </ButtonPrimary>
              <ButtonBordered type="button" light bold className="btn-account" onClick={handleToggleAuth}>
                Já tenho conta
              </ButtonBordered>
            </>
          :
            <>
              <LoginAccount />
              <ButtonPrimary form="form-login" type="submit">
                Login
              </ButtonPrimary>
              <ButtonBordered type="button" light bold className="btn-account" onClick={handleToggleAuth} >
                Criar conta
              </ButtonBordered>
            </>
        }
      </Modal.Body>
    </S.ModalAuth>
  );
}

export default ModalAuth;
