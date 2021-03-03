import React from 'react';
import { Form } from 'react-bootstrap';

import { ButtonBordered } from '../CustomButton';
import Field from "../../components/Field";

import * as S from './styles';

const SearchBar = ({className}) => {
  return (
    <>
      <Form className={`${className}`} inline>
        <Field type="text" placeholder="Pesquisar" className="mr-sm-2" />
        <ButtonBordered sm variant="outline-success">Pesquisar</ButtonBordered>
      </Form>
    </>
  );
}

export default SearchBar;
