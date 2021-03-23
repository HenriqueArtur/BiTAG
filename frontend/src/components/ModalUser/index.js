import React from 'react';

import * as S from './styles';

import { Modal } from 'react-bootstrap';

import woman from '../../assets/woman.jpg';
import Profile from '../Profile';

const ModalUser = (props) => {
  return (
    <S.ModalUser
      animation={false}
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton />

      <Modal.Body>
        <S.UserSidebar>
          <S.UserIcon>
            <img src={woman} alt="Woman profile" />
          </S.UserIcon>

          <S.UserNav>
            <ul>
              <li>
                <button type="button">
                  Visão geral da conta
                </button>
              </li>
              <li>
                <button type="button">
                  Segurança
                </button>
              </li>
            </ul>
          </S.UserNav>
        </S.UserSidebar>

        <S.MainAccount>
          <h1>Visão geral da conta</h1>

          <Profile />

        </S.MainAccount>
      </Modal.Body>
    </S.ModalUser>
  );
}

export default ModalUser;
