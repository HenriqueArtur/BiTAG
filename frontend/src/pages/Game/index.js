import React, { useEffect, useState } from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import { FiChevronLeft, FiDollarSign, FiThumbsDown, FiThumbsUp, FiTriangle, FiUser } from 'react-icons/fi';

import { Link, useParams } from 'react-router-dom';

import * as S from './styles';
import GameCard from '../../components/GameCard';

import NumberFormat from 'react-number-format';

import api from '../../services/api';

const Games = () => {
  let { game_name } = useParams();
  const [game, setGame] = useState([]);

  useEffect(() => {
    api.get(`/games/findByName?names=${game_name}`)
    .then(response => {
      setGame(response.data);
    }).catch(err => {
      console.log(err);
    });
  }, [game_name]);

  return (
    <div id="page-game">
      <Container className="d-flex flex-column">
        <Row>
          <Col>
            <Link to="/games">
              <FiChevronLeft color="#66fcf1" size={25} />
              Voltar
            </Link>
          </Col>
        </Row>

        <Row className="flex-100 mt-4 justify-content-start">
          {game.map(game => (
            <Col key={game.id} md="3" lg="3">
              <S.GameColumn>
                <GameCard game={game} />
                <S.GameText>
                  <h3>Publisher name</h3>
                  <p>{game.publisher_name}</p>
                </S.GameText>

                <S.GameText className="mb-4">
                  <p>{game.short_description}</p>
                </S.GameText>

                <S.GameMetric>
                  <h3>Release Date:</h3>
                  <p>
                    {game.release_date}
                  </p>
                </S.GameMetric>

                { game.website &&
                  <S.GameMetric>
                    <h3>Website:</h3>
                    <a href={game.website} target="_blank" rel="noreferrer">Access Website</a>
                  </S.GameMetric>
                }
              </S.GameColumn>
            </Col>
          ))}

          <Col md="9" lg="9">
            <Row className="justify-content-center">
              {game.map(game => (
                <S.MetricWrapper  key={game.id}>
                  <S.MetricCard>
                    <div>
                      <div>
                        <FiDollarSign />
                      </div>
                      <h3>Price</h3>
                      <NumberFormat
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$'}
                        decimalScale={2}
                        value={game.price / 100}
                      />
                    </div>
                  </S.MetricCard>

                  <S.MetricCard>
                    <div>
                      <div>
                        <FiDollarSign />
                      </div>
                      <h3>Initial Price</h3>
                      <NumberFormat
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$'}
                        decimalScale={2}
                        value={game.inital_price / 100}
                      />
                    </div>
                  </S.MetricCard>

                  <S.MetricCard>
                    <div>
                      <div>
                        <FiUser />
                      </div>
                      <h3>Owners</h3>
                      <NumberFormat
                        displayType={'text'}
                        thousandSeparator="."
                        decimalSeparator=","
                        decimalScale={2}
                        value={game.owners}
                      />
                    </div>
                  </S.MetricCard>

                  <S.MetricCard>
                    <div>
                      <div>
                        <FiTriangle />
                      </div>
                      <h3>Revenue</h3>
                      <NumberFormat
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$'}
                        decimalScale={2}
                        value={game.revenue / 100}
                      />
                    </div>
                  </S.MetricCard>

                  <S.MetricCard>
                    <div>
                      <div>
                        <FiThumbsUp />
                      </div>
                      <h3>Positive reviews</h3>
                      <NumberFormat
                        displayType={'text'}
                        thousandSeparator="."
                        decimalSeparator=","
                        decimalScale={2}
                        value={game.positive_reviews}
                      />
                    </div>
                  </S.MetricCard>

                  <S.MetricCard>
                    <div>
                      <div>
                        <FiThumbsDown />
                      </div>
                      <h3>Negative reviews</h3>
                      <NumberFormat
                        displayType={'text'}
                        thousandSeparator="."
                        decimalSeparator=","
                        decimalScale={2}
                        value={game.negative_reviews}
                      />
                    </div>
                  </S.MetricCard>
                </S.MetricWrapper>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Games;
