import React from 'react';

import * as S from './styles';

const Field = ({ name, fontSize, id, label, placeholder, onChange, value, type, ...rest }) => {
  return (
    <S.Field>
      {
        label &&
        <S.Label htmlFor={name} fontSize={fontSize}>{label}</S.Label>
      }

      <S.Input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </S.Field>
  );
}

export default Field;
