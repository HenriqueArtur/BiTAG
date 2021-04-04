import React from 'react';

import * as S from './styles';

import gamePlaceholder from '../../assets/placeholder-game.png';

const GameCard = ({game}) => {
  return (
    <>
      <S.GameCard>
        <S.ImageWrapper>
          {
            game.header_image === null
            ? (
              <img src={gamePlaceholder} alt="game cover" />
            ) : (
              <img src={game.header_image} alt="game cover" />
            )
          }
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
