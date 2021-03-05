import React from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import * as S from './styles';
import GameCard from '../../components/GameCard';

const Games = () => {
  return (
    <div id="page-gamescomparison">
      <Container className="d-flex flex-column">
        <Row>
          <Col>
            <Link to="/games">
              <FiChevronLeft color="#66fcf1" size={25} />
              Voltar
            </Link>
          </Col>
        </Row>

        <Row className="flex-100 mt-4 justify-content-between">
          <Col md="3" lg="3">
            <GameCard />

            <S.GameMetric>
              <h3>Metrica (LOR)</h3>
              <p>20%</p>
            </S.GameMetric>

            <S.GameMetric>
              <h3>Metrica (LOR)</h3>
              <p>+ 30 s</p>
            </S.GameMetric>

            <S.GameMetric>
              <h3>Metrica (LOR)</h3>
              <p>- 10.000 $</p>
            </S.GameMetric>
          </Col>

          <Col md="6" lg="6">
            <Row>
              <Col>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col>
                    <S.InfoHeading>
                      <h3>Page View vs Onload</h3>
                    </S.InfoHeading>
                  </Col>
                </Row>
                <Row>
                  <Col className="d-flex justify-content-around">
                    <S.GameData>
                      <h3>Page Load (LUX)</h3>
                      <p>0.7s</p>
                    </S.GameData>

                    <S.GameData>
                      <h3>Page Views (LUX)</h3>
                      <p>2.7 Mpvs</p>
                    </S.GameData>

                    <S.GameData>
                      <h3>Bounce Rate (LUX)</h3>
                      <p>40.6%</p>
                    </S.GameData>
                  </Col>
                </Row>
              </Col>
            </Row>

          </Col>

          <Col md="3" lg="3">
            <GameCard />

            <S.GameMetric>
              <h3>Metrica (LOR)</h3>
              <p>20%</p>
            </S.GameMetric>

            <S.GameMetric>
              <h3>Metrica (LOR)</h3>
              <p>+ 30 s</p>
            </S.GameMetric>

            <S.GameMetric>
              <h3>Metrica (LOR)</h3>
              <p>- 10.000 $</p>
            </S.GameMetric>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Games;
