import React from 'react';
import { Row } from 'react-bootstrap';

import { ButtonBordered } from '../CustomButton';
import Field from "../../components/Field";

const SearchBar = ({className, onChange, value, onClick}) => {
  return (
    <Row className="justify-content-end">
      <Field onChange={onChange} value={value} type="text" placeholder="Pesquisar" className="mr-sm-2" />
      <ButtonBordered className="ml-2" type="button" sm="true" variant="outline-success" onClick={onClick}>Pesquisar</ButtonBordered>
    </Row>
  );
}

export default SearchBar;
