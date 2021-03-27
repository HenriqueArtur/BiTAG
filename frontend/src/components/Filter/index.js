import React from 'react';

import { Form } from 'react-bootstrap';
import * as S from './styles';

const Filter = ({label, name, options, ...rest}) => {
  return (
    <Form inline className="justify-content-center justify-content-md-start">
      <Form.Label className="mb-0" htmlFor={name}>{label}</Form.Label>

      <S.Select value="" id={name} {...rest}>
        <option value="" disabled hidden>Selecione uma opção</option>
				{options.map(option => {
					return <option key={option.value} value={option.value}>{option.label}</option>
				})}
      </S.Select>
    </Form>
  );
}

export default Filter;
