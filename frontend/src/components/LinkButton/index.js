import React from 'react';

import * as S from './styles';

export const LinkPrimary = ({ className, to, children, ...rest }) => {
  return (
    <S.LinkPrimary className={`btn ${className}`} to={to} {...rest}>
      {children}
    </S.LinkPrimary>
  );
}

export const LinkBordered = ({ className, to, children, ...rest }) => {
  return (
    <S.LinkBordered className={`btn ${className}`} to={to} {...rest}>
      {children}
    </S.LinkBordered>
  );
}

export const LinkLight = ({ className, to, children, ...rest }) => {
  return (
    <S.LinkLight className={`btn ${className}`} to={to} {...rest}>
      {children}
    </S.LinkLight>
  );
}
