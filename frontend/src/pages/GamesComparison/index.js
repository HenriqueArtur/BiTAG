import React, { useEffect, useState } from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import * as S from './styles';
import GameCard from '../../components/GameCard';

import ChartBar from '../../components/ChartBar';
import ChartHorizontalBar from '../../components/ChartHorizontalBar';
import ChartPolarArea from '../../components/ChartPolarArea';

import api from '../../services/api';

const Games = () => {
  const [games, setGames] = useState([]);
  const history = useHistory();

  const search = history.location.search;

  const [label, setLabel] = useState([]);
  const [price, setPrice] = useState([]);
  const [initialPrice, setInitialPrice] = useState([]);
  const [revenue, setRevenue] = useState([]);
  const [owners, setOwners] = useState([]);

  useEffect(() => {
    api.get(`/games/findByName${search}`).then(response => {
      setGames(response.data);
      setLabel(Object.keys(response.data).map(key => response.data[key].name));
      setPrice(Object.keys(response.data).map(key => response.data[key].price));
      setInitialPrice(Object.keys(response.data).map(key => response.data[key].inital_price));
      setRevenue(Object.keys(response.data).map(key => response.data[key].revenue));
      setOwners(Object.keys(response.data).map(key => response.data[key].owners));
    });
  }, [search]);

  return (
    <div id="page-gamescomparison">
      <Container className="d-flex flex-column">
        <Row>
          <Col>
            <S.BackButton onClick={() => history.goBack()}>
              <FiChevronLeft color="#66fcf1" size={25} />
              Voltar
            </S.BackButton>
          </Col>
        </Row>

        <Row className="flex-100 mt-4 justify-content-between">
          <Col md="3" lg="3" className="mb-5 mb-md-0">
            {games.map((game) => (
              <S.GameColumn key={game.id}>
                <GameCard game={game} />

                <S.GameText>
                  <h3>Publisher name:</h3>
                  <p>{game.publisher_name}</p>
                </S.GameText>

                <S.GameText className="mb-4">
                  <p>{game.short_description}</p>
                </S.GameText>

                <S.GameMetric>
                  <h3>Positive Reviews:</h3>
                  <p>
                    {game.positive_reviews}
                  </p>
                </S.GameMetric>

                <S.GameMetric>
                  <h3>Negative Reviews:</h3>
                  <p>
                    {game.negative_reviews}
                  </p>
                </S.GameMetric>

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
            ))}
          </Col>

          <Col md="9" lg="9" className="mb-5 mb-md-0">
            <S.GraphicTitle>
              Revenue Comparison
            </S.GraphicTitle>
            <Row className="mb-5">
              <Col>
                <ChartBar
                  data={{
                    labels: label,
                    datasets: [
                      {
                        type: "bar",
                        label: "Revenue",
                        barPercentage: 0.1,
                        backgroundColor: "rgba(111, 227, 255, 0.5)",
                        borderColor: "rgba(111, 227, 255, 1)",
                        borderWidth: 1,
                        hoverBackgroundColor: "rgba(111, 227, 255, 0.7)",
                        hoverBorderColor: "rgba(111, 227, 255, 1)",
                        fill: false,
                        data: revenue
                      }
                    ],
                  }}
                />
              </Col>
            </Row>

            <S.GraphicTitle>
              Owners Comparison
            </S.GraphicTitle>
            <Row className="mb-5">
              <Col>
                <ChartPolarArea
                  data={{
                    labels: label,
                    datasets: [
                      {
                        label: "Owners",
                        backgroundColor: "rgba(89, 89, 224, 0.4)",
                        borderColor: "rgba(89, 89, 224, 1)",
                        borderWidth: 1,
                        hoverBackgroundColor: "rgba(89, 89, 224, 0.6)",
                        hoverBorderColor: "rgba(89, 89, 224, 1)",
                        data: owners
                      }
                    ],
                  }}
                />
              </Col>
            </Row>

            <S.GraphicTitle>
              Price Comparison
            </S.GraphicTitle>
            <Row className="mb-5">
              <Col>
                <ChartHorizontalBar
                  data={{
                    labels: label,
                    datasets: [
                      {
                        label: "Price",
                        barPercentage: 0.2,
                        backgroundColor: "rgba(195, 69, 133, 0.6)",
                        borderColor: "rgba(195, 69, 133, 1)",
                        borderWidth: 1,
                        hoverBackgroundColor: "rgba(195, 69, 133, 0.8)",
                        hoverBorderColor: "rgba(195, 69, 133, 1)",
                        data: price
                      }
                    ],
                  }}
                />
              </Col>
            </Row>

            <S.GraphicTitle>
              Initial Price Comparison
            </S.GraphicTitle>
            <Row>
              <Col>
                <ChartHorizontalBar
                  data={{
                    labels: label,
                    datasets: [
                      {
                        label: "Initial Price",
                        barPercentage: 0.2,
                        backgroundColor: "rgba(59, 218, 109, 0.4)",
                        borderColor: "rgba(59, 218, 109, 1)",
                        borderWidth: 1,
                        hoverBackgroundColor: "rgba(59, 218, 109, 0.6)",
                        hoverBorderColor: "rgba(59, 218, 109, 1)",
                        data: initialPrice
                      }
                    ],
                  }}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Games;
