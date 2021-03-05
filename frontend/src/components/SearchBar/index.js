import React from 'react';
import { Form } from 'react-bootstrap';

import { ButtonBordered } from '../CustomButton';
import Field from "../../components/Field";

const SearchBar = ({className}) => {
  return (
    <>
      <Form className={`${className}`} inline>
        <Field type="text" placeholder="Pesquisar" className="mr-sm-2" />
        <ButtonBordered type="button" sm="true" variant="outline-success">Pesquisar</ButtonBordered>
      </Form>
    </>
  );
}

export default SearchBar;
