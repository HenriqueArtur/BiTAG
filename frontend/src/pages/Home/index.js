import React, { useEffect, useState } from 'react';

import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { FiChevronDown } from 'react-icons/fi';

import backgroundHome from '../../assets/background-home.png';
import logo from '../../assets/logo.png';

import * as S from './styles';

import api from '../../services/api';

const Home = () => {
  const [games, setGames] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        await api.get(`/home`)
        .then(response => {
          setGames(Object.keys(response.data).map(key => response.data[key]));
        });
        setLoading(true);
      } catch (err) {
        console.log(err);
      }
    }

    fetchGames();
  }, []);

  return (
    <div id="page-home">
      <S.Background>
        <img src={backgroundHome} alt="BiTAG Home Background" />

        <div>
          <img src={logo} alt="BiTAG logo" />
          <h1>Plataforma de comparação de dados</h1>
          <p>Otimização do tempo de pesquisa por meio da comparação de Tags para a tomada de decisão de estúdios e desenvolvedores indies.</p>

          <a href="#tags"><FiChevronDown /></a>
        </div>
      </S.Background>

      <Container id="tags" className="d-flex flex-column">
        {
          loading ? (

            games.map(item => (
              <Row key={item.tag} className="flex-100 justify-content-start mb-4">
                <Col md="12" className="mb-4">
                  <S.ListTitle>
                    {item.tag}
                  </S.ListTitle>
                </Col>
                {
                  item.games.map(game => (
                    <Col key={game.id} md="6" lg="3" className="mb-4">
                      <S.GameCard key={game.id}>
                        <S.ImageWrapper>
                          <img src={game.header_image} alt={game.name} />
                          <S.GameActions>
                            <S.ViewGame to={{pathname: `/game/${game.name}`}} uppercase>
                              Visualizar
                            </S.ViewGame>
                          </S.GameActions>
                        </S.ImageWrapper>
                        <S.GameInfo>
                          <h3>{game.name}</h3>
                          <p>{game.developer_name}</p>
                        </S.GameInfo>
                      </S.GameCard>
                    </Col>
                  ))
                }
              </Row>
            ))

          ) : (
            <Row className="flex-100 justify-content-center">
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            </Row>
          )
        }
      </Container>
    </div>
  );
}

export default Home;
