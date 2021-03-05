import React from 'react';
import { Form } from 'react-bootstrap';

const InputGroup = ({ controlId, label, onChange, placeholder, value, type, ...rest }) => {
  return (
    <Form.Group controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        {...rest}
      />
    </Form.Group>
  );
}

export default InputGroup;
