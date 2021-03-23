import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { Col, Form } from 'react-bootstrap';

import * as S from './styles';

const EditProfile = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    try {
      if (password === passwordConfirmation) {
        toast.success("Password updated succesfully!");
      } else {
        toast.error("Passwords don't match. Try again.");
      }
    } catch (error) {
      toast.error("An error has occurred. Please, try again.");
    }

  }

  return (
    <>
      <Col md="12" className="mb-3">
        <Form id="form-edit-profile" onSubmit={handleSubmit}>
          <S.Info>
            <Form.Label>Foto de perfil</Form.Label>

            <Form.File
              className="position-relative"
              required
              name="file"
              id="validationFormik107"
              feedbackTooltip
            />
          </S.Info>
          <S.Info>
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nome"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </S.Info>
          <S.Info>
            <Form.Label>Sobrenome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Sobrenome"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              required
            />
          </S.Info>
          <S.Info>
            <Form.Label>Nome de usuário</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nome de usuário"
              value={userName}
              onChange={e => setUserName(e.target.value)}
              required
            />
          </S.Info>
          <S.Info>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </S.Info>
          <S.Info>
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Senha"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </S.Info>
          <S.Info>
            <Form.Label>Confirmar Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirmar senha"
              value={passwordConfirmation}
              onChange={e => setPasswordConfirmation(e.target.value)}
              required
            />
          </S.Info>
        </Form>


      </Col>
    </>
  );
}

export default EditProfile;
