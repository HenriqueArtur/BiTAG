import React, { useState } from 'react';

import * as S from './styles';

import { Modal } from 'react-bootstrap';

import woman from '../../assets/woman.jpg';
import { ButtonBordered } from '../CustomButton';

import ShowProfile from '../Profile/ShowProfile';
import EditProfile from '../Profile/EditProfile';

const ModalUser = (props) => {
  const [toggle, setToggle] = useState(false);

  function handleToggleAccount () {
    setToggle(!toggle);
  }

  return (
    <S.ModalUser
      animation={false}
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
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
          {
            toggle ?
              <EditProfile />
            :
              <ShowProfile />
          }


          {
            !toggle &&
            <ButtonBordered bold light onClick={handleToggleAccount}>
              Editar Perfil
            </ButtonBordered>
          }

          {
            toggle &&
            <ButtonBordered className="cancel" light bold onClick={handleToggleAccount}>
              Cancelar
            </ButtonBordered>
          }

        </S.MainAccount>
      </Modal.Body>
    </S.ModalUser>
  );
}

export default ModalUser;
