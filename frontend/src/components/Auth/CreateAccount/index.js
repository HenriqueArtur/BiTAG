import React, { useState } from 'react';

import { Form } from 'react-bootstrap';
import InputGroup from '../../InputGroup';

const CreateAccount = (props) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  return (
    <Form id="form-create">
      <Form.Group>
        <Form.File id="profile-image" label="Foto de perfil" />
      </Form.Group>

      <InputGroup
        label="Nome"
        controlId="name"
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Insira seu nome"
        required="required"
      />

      <InputGroup
        label="Sobrenome"
        controlId="lastName"
        type="text"
        value={lastName}
        onChange={e => setLastName(e.target.value)}
        placeholder="Insira seu sobrenome"
        required="required"
      />

      <InputGroup
        label="Nome de usuário"
        controlId="userName"
        type="text"
        value={userName}
        onChange={e => setUserName(e.target.value)}
        placeholder="Insira seu nome de usuário"
        required="required"
      />

      <InputGroup
        label="Email"
        controlId="email"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Insira seu email"
        required="required"
      />

      <InputGroup
        label="Senha"
        controlId="senha"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Insira sua senha"
        required="required"
      />

      <InputGroup
        label="Confirmar senha"
        controlId="confirmarSenha"
        type="password"
        value={passwordConfirmation}
        onChange={e => setPasswordConfirmation(e.target.value)}
        placeholder="Insira sua senha"
        required="required"
      />
    </Form>
  );
}

export default CreateAccount;
