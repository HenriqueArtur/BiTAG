import React, { useState } from 'react';

import { Col, Row } from 'react-bootstrap';

import { ButtonBordered, ButtonPrimary } from '../CustomButton';

import EditProfile from './EditProfile';
import ShowProfile from './ShowProfile';

import * as S from './styles';

const Profile = () => {
  const [toggle, setToggle] = useState(false);

  function handleToggleAccount () {
    setToggle(!toggle);
  }

  return (
    <S.AccountInfo>
      <h3>Perfil</h3>
      <Row>
        {
          toggle ?
            <>
              <EditProfile />

              <Col md="12" className="d-flex justify-content-between">
                <ButtonBordered className="cancel" light bold onClick={handleToggleAccount}>
                    Cancelar
                </ButtonBordered>

                <ButtonPrimary form="form-edit-profile" type="submit" className="ml-auto" onClick={handleToggleAccount}>
                  Salvar
                </ButtonPrimary>
              </Col>
            </>
          :
            <>
              <ShowProfile />

              <Col md="12" className="d-flex">
                <ButtonBordered bold light onClick={handleToggleAccount}>
                  Editar Perfil
                </ButtonBordered>
              </Col>
            </>
        }
      </Row>

    </S.AccountInfo>
  );
}

export default Profile;
