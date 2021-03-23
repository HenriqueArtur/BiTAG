import React from 'react';

import { Form } from 'react-bootstrap';
import * as S from './styles';

const Filter = () => {
  return (
    <Form inline className="justify-content-center justify-content-md-start">
      <Form.Label className="mb-0">Filtros: </Form.Label>

      <S.Select>
        <option>Novos lançamentos</option>
        <option>Antigos lançamentos</option>
      </S.Select>
    </Form>
  );
}

export default Filter;
