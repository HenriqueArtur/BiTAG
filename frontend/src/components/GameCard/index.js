import React from 'react';

import * as S from './styles';

const GameCard = ({game}) => {
  return (
    <>
      <S.GameCard>
        <S.ImageWrapper>
          <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1482130/header.jpg?t=1614479631" alt="game logo" />
        </S.ImageWrapper>
        <S.GameInfo>
          <h3>Nome do Jogo</h3>
          <p>Estúdio</p>
        </S.GameInfo>
      </S.GameCard>
    </>
  );
}

export default GameCard;
