import React from 'react';

import {  Modal } from 'react-bootstrap';

import * as S from './styles';

const ModalLogin = (props) => {
  return (
    <S.ModalLogin
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton />
      <Modal.Body>
        <h4>Login</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
    </S.ModalLogin>
  );
}

export default ModalLogin;
