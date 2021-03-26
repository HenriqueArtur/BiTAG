import React, { useEffect, useState } from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import { FiChevronLeft } from 'react-icons/fi';

import { Link, useParams } from 'react-router-dom';

import * as S from './styles';
import GameCard from '../../components/GameCard';

// import ChartBar from '../../components/ChartBar';
// import axios from 'axios';

import NumberFormat from 'react-number-format';

import api from '../../services/api';

const Games = () => {
  let { game_name } = useParams();
  const [game, setGame] = useState([]);

  // const [label, setLabel] = useState([]);
  // const [price, setPrice] = useState([]);
  // const [discount, setDiscount] = useState([]);

  useEffect(() => {
    api.get(`/api/games/findByName?names=${game_name}`)
    .then(response => {
      setGame(response.data);
    }).catch(err => {
      console.log(err);
    });
  }, [game_name]);

  // useEffect(() => {
  //   axios.get("./steam.json")
  //   .then(result => {
  //     setLabel(Object.keys(result.data).map(key => result.data[key].release));
  //     setPrice(Object.keys(result.data).map(key => result.data[key].price));
  //     setDiscount(Object.keys(result.data).map(key => result.data[key].discount));
  //   });
  // }, []);

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
                  <h3>Initial Price:</h3>
                  <p>
                    <NumberFormat
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'$'}
                      decimalScale={2}
                      value={game.inital_price / 100}
                    />
                  </p>
                </S.GameMetric>

                <S.GameMetric>
                  <h3>Price:</h3>
                  <p>
                    <NumberFormat
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'$'}
                      decimalScale={2}
                      value={game.price / 100}
                    />
                  </p>
                </S.GameMetric>

                <S.GameMetric>
                  <h3>Revenue:</h3>
                  <p>
                    <NumberFormat
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'$'}
                      decimalScale={2}
                      value={game.revenue / 100}
                    />
                  </p>
                </S.GameMetric>

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
                  <h3>Owners:</h3>
                  <p>
                    {game.owners}
                  </p>
                </S.GameMetric>

                <S.GameMetric>
                  <h3>Release Date:</h3>
                  <p>
                    {game.release_date}
                  </p>
                </S.GameMetric>

                <S.GameMetric>
                  <h3>Website:</h3>
                  <a href={game.website} target="_blank" rel="noreferrer">Access Website</a>
                </S.GameMetric>
              </S.GameColumn>
            </Col>
          ))}

          <Col md="6" lg="6">
            <Row>
              <Col>
                {/* <ChartBar
                  data={{
                    labels: label,
                    datasets: [
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
        </Row>
      </Container>
    </div>
  );
}

export default Games;
