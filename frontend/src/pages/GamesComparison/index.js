import React, { useEffect, useState } from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import * as S from './styles';
import GameCard from '../../components/GameCard';

import NumberFormat from 'react-number-format';

// import ChartBar from '../../components/ChartBar';
// import axios from 'axios';

import api from '../../services/api';

const Games = () => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [games, setGames] = useState([]);
  const history = useHistory();

  const search = history.location.search;

  useEffect(() => {
    api.get(`/api/games/findByName${search}`).then(response => {
      setGames(response.data);
      setDataLoaded(true);
    });
  }, [search]);

  // const [label, setLabel] = useState([]);
  // const [price, setPrice] = useState([]);
  // const [discount, setDiscount] = useState([]);

  // useEffect(() => {
  //   axios.get("./steam.json")
  //   .then(result => {
  //     setLabel(Object.keys(result.data).map(key => result.data[key].release));
  //     setPrice(Object.keys(result.data).map(key => result.data[key].price));
  //     setDiscount(Object.keys(result.data).map(key => result.data[key].discount));
  //   });
  // }, []);

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
            {
              dataLoaded &&
              <>
                <GameCard game={games[0]} />

                <S.GameMetric>
                  <h3>Initial Price</h3>
                  <p>
                    <NumberFormat
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'$'}
                      decimalScale={2}
                      value={games[0].inital_price / 100}
                    />
                  </p>
                </S.GameMetric>

                <S.GameMetric>
                  <h3>Price</h3>
                  <p>
                    <NumberFormat
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'$'}
                      decimalScale={2}
                      value={games[0].price / 100}
                    />
                  </p>
                </S.GameMetric>

                <S.GameMetric>
                  <h3>Revenue</h3>
                  <p>
                    <NumberFormat
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'$'}
                      decimalScale={2}
                      value={games[0].revenue / 100}
                    />
                  </p>
                </S.GameMetric>

                <S.GameMetric>
                  <h3>Positive Reviews</h3>
                  <p>
                    {games[0].positive_reviews}
                  </p>
                </S.GameMetric>

                <S.GameMetric>
                  <h3>Negative Reviews</h3>
                  <p>
                    {games[0].negative_reviews}
                  </p>
                </S.GameMetric>

                <S.GameMetric>
                  <h3>Owners</h3>
                  <p>
                    {games[0].owners}
                  </p>
                </S.GameMetric>

                <S.GameMetric>
                  <h3>Release Date</h3>
                  <p>
                    {games[0].release_date}
                  </p>
                </S.GameMetric>

                { games[0].website &&
                  <S.GameMetric>
                    <h3>Website</h3>
                    <a href={games[0].website} target="_blank" rel="noreferrer">Access Website</a>
                  </S.GameMetric>
                }

                <S.GameText>
                  <h3>Short Description</h3>
                  <p>{games[0].short_description}</p>
                </S.GameText>

                <S.GameText>
                  <h3>Detailed Description</h3>
                  <p>{games[0].detailed_description}</p>
                </S.GameText>

                <S.GameText>
                  <h3>About</h3>
                  <p>{games[0].about}</p>
                </S.GameText>
              </>
            }
          </Col>

          <Col md="6" lg="6" className="mb-5 mb-md-0">
            <Row>
              <Col>
                {/* <ChartBar
                  data={{
                    labels: label,
                    datasets: [
                      {
                        type: "line",
                        label: "Releases price",
                        borderColor: "rgba(255,99,132,0.8)",
                        borderWidth: 1,
                        hoverBorderColor: "rgba(255,99,132,1)",
                        fill: false,
                        data: price
                      },
                      {
                        type: "bar",
                        label: "Releases discount",
                        backgroundColor: "rgba(111, 227, 255, 0.2)",
                        borderColor: "rgba(111, 227, 255, 1)",
                        borderWidth: 1,
                        hoverBackgroundColor: "rgba(111, 227, 255, 0.4)",
                        hoverBorderColor: "rgba(111, 227, 255, 1)",
                        data: discount
                      }
                    ],
                  }}
                /> */}
              </Col>
            </Row>
            <Row className="mt-5">
              {/* <Col>
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
              </Col> */}
            </Row>

          </Col>

          <Col md="3" lg="3">
            {
              dataLoaded &&
              <>
                <GameCard game={games[1]} />

                <S.GameMetric>
                  <h3>Initial Price</h3>
                  <p>
                    <NumberFormat
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'$'}
                      decimalScale={2}
                      value={games[1].inital_price / 100}
                    />
                  </p>
                </S.GameMetric>

                <S.GameMetric>
                  <h3>Price</h3>
                  <p>
                    <NumberFormat
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'$'}
                      decimalScale={2}
                      value={games[1].price / 100}
                    />
                  </p>
                </S.GameMetric>

                <S.GameMetric>
                  <h3>Revenue</h3>
                  <p>
                    <NumberFormat
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'$'}
                      decimalScale={2}
                      value={games[1].revenue / 100}
                    />
                  </p>
                </S.GameMetric>

                <S.GameMetric>
                  <h3>Positive Reviews</h3>
                  <p>
                    {games[1].positive_reviews}
                  </p>
                </S.GameMetric>

                <S.GameMetric>
                  <h3>Negative Reviews</h3>
                  <p>
                    {games[1].negative_reviews}
                  </p>
                </S.GameMetric>

                <S.GameMetric>
                  <h3>Owners</h3>
                  <p>
                    {games[1].owners}
                  </p>
                </S.GameMetric>

                <S.GameMetric>
                  <h3>Release Date</h3>
                  <p>
                    {games[1].release_date}
                  </p>
                </S.GameMetric>

                { games[1].website &&
                  <S.GameMetric>
                    <h3>Website</h3>
                    <a href={games[1].website} target="_blank" rel="noreferrer">Access Website</a>
                  </S.GameMetric>
                }

                <S.GameText>
                  <h3>Short Description</h3>
                  <p>{games[1].short_description}</p>
                </S.GameText>

                <S.GameText>
                  <h3>Detailed Description</h3>
                  <p>{games[1].detailed_description}</p>
                </S.GameText>

                <S.GameText>
                  <h3>About</h3>
                  <p>{games[1].about}</p>
                </S.GameText>
              </>
            }
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Games;
