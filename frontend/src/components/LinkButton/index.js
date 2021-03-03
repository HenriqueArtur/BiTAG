import React from 'react';

import * as S from './styles';

export const LinkPrimary = ({ className, to, children, ...rest }) => {
  return (
    <S.ButtonPrimary className={`btn ${className}`} to={to} {...rest}>
      {children}
    </S.ButtonPrimary>
  );
}

export const LinkBordered = ({ className, to, children, ...rest }) => {
  return (
    <S.ButtonBordered className={`btn ${className}`} to={to} {...rest}>
      {children}
    </S.ButtonBordered>
  );
}

export const LinkLight = ({ className, to, children, ...rest }) => {
  return (
    <S.ButtonLight className={`btn ${className}`} to={to} {...rest}>
      {children}
    </S.ButtonLight>
  );
}
