import React from 'react';

import * as S from './styles';

export const ButtonPrimary = ({ className, type, children, ...rest }) => {
  return (
    <S.ButtonPrimary type={type} className={`btn ${className}`} {...rest}>
      {children}
    </S.ButtonPrimary>
  );
}

export const ButtonBordered = ({ className, type, children, ...rest }) => {
  return (
    <S.ButtonBordered type={type} className={`btn ${className}`} {...rest}>
      {children}
    </S.ButtonBordered>
  );
}

export const ButtonLight = ({ className, type, children, ...rest }) => {
  return (
    <S.ButtonLight type={type} className={`btn ${className}`} {...rest}>
      {children}
    </S.ButtonLight>
  );
}
