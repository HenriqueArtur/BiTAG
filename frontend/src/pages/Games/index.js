import React from 'react';

import { Col, Container, Row } from 'react-bootstrap';
// import { FiChevronLeft } from 'react-icons/fi';

import { ButtonPrimary } from '../../components/CustomButton';

import Filter from '../../components/Filter';
import Sorter from '../../components/Sorter';

import SearchBar from '../../components/SearchBar';


import * as S from './styles';

const Games = () => {
  return (
    <div id="page-games">
      <Container className="d-flex flex-column">
        <Row className="align-items-center flex-100 justify-content-between mb-4">
          <Col sm="12" md="4" className="mb-3 mb-md-0">
            <Filter />

            <Sorter />
          </Col>

          <Col sm="12" md="4">
            <SearchBar className="justify-content-center justify-content-md-end" />
          </Col>
        </Row>

        <Row className="flex-100 justify-content-between">
          <Col md="6" lg="4" className="mb-4">
            <S.GameCard>
              <S.ImageWrapper>
                <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1482130/header.jpg?t=1614479631" alt="game logo" />

                <S.GameActions>
                  <ButtonPrimary uppercase type="button">
                    Comparar
                  </ButtonPrimary>

                  <ButtonPrimary uppercase type="button">
                    Analisar
                  </ButtonPrimary>
                </S.GameActions>
              </S.ImageWrapper>
              <S.GameInfo>
                <h3>Nome do Jogo</h3>
                <p>Estúdio</p>
              </S.GameInfo>
            </S.GameCard>
          </Col>

          <Col md="6" lg="4" className="mb-4">
            <S.GameCard>
              <S.ImageWrapper>
                <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/694280/header.jpg?t=1614158765" alt="game logo" />

                <S.GameActions>
                  <ButtonPrimary uppercase type="button">
                    Comparar
                  </ButtonPrimary>

                  <ButtonPrimary uppercase type="button">
                    Analisar
                  </ButtonPrimary>
                </S.GameActions>
              </S.ImageWrapper>
              <S.GameInfo>
                <h3>Nome do Jogo</h3>
                <p>Estúdio</p>
              </S.GameInfo>
            </S.GameCard>
          </Col>

          <Col md="6" lg="4" className="mb-4">
            <S.GameCard>
              <S.ImageWrapper>
                <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1482130/header.jpg?t=1614479631" alt="game logo" />

                <S.GameActions>
                  <ButtonPrimary uppercase type="button">
                    Comparar
                  </ButtonPrimary>

                  <ButtonPrimary uppercase type="button">
                    Analisar
                  </ButtonPrimary>
                </S.GameActions>
              </S.ImageWrapper>
              <S.GameInfo>
                <h3>Nome do Jogo</h3>
                <p>Estúdio</p>
              </S.GameInfo>
            </S.GameCard>
          </Col>

          <Col md="6" lg="4" className="mb-4">
            <S.GameCard>
              <S.ImageWrapper>
                <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1482130/header.jpg?t=1614479631" alt="game logo" />

                <S.GameActions>
                  <ButtonPrimary uppercase type="button">
                    Comparar
                  </ButtonPrimary>

                  <ButtonPrimary uppercase type="button">
                    Analisar
                  </ButtonPrimary>
                </S.GameActions>
              </S.ImageWrapper>
              <S.GameInfo>
                <h3>Nome do Jogo</h3>
                <p>Estúdio</p>
              </S.GameInfo>
            </S.GameCard>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Games;
