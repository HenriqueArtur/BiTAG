import React from 'react';

import * as S from './styles';

const GameCard = ({game}) => {
  return (
    <>
      <S.GameCard>
        <S.ImageWrapper>
          <img src={game.header_image} alt="game logo" />
        </S.ImageWrapper>
        <S.GameInfo>
          <h3>{game.name}</h3>
          <p>{game.developer_name}</p>
        </S.GameInfo>
      </S.GameCard>
    </>
  );
}

export default GameCard;
