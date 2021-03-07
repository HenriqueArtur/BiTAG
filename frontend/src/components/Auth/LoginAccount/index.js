import React, { useState } from 'react';

import { Form } from 'react-bootstrap';
import InputGroup from '../../InputGroup';

const Login = (props) => {
  const [userName, setUserName] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <Form id="form-login">
      <InputGroup
        label="Nome de usuário"
        controlId="username"
        type="text"
        value={userName}
        onChange={e => setUserName(e.target.value)}
        placeholder="Insira seu nome de usuário"
        required="required"
      />

      <InputGroup
        label="Senha"
        controlId="senha"
        type="password"
        value={senha}
        onChange={e => setSenha(e.target.value)}
        placeholder="Insira sua senha"
        required="required"
      />
    </Form>
  );
}

export default Login;
