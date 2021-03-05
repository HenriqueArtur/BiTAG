import React from 'react';

import { Form } from 'react-bootstrap';
import * as S from './styles';

const Sorter = () => {
  return (
    <Form inline className="justify-content-center justify-content-md-start">
      <Form.Label className="mb-0">Ordenar por: </Form.Label>
      <S.Select>
        <option>Mais populares (crescente)</option>
        <option>Mais populares (decrescente)</option>
      </S.Select>
    </Form>
  );
}

export default Sorter;
