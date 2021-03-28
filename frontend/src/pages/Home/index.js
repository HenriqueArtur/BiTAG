import React, { useEffect, useState } from 'react';

import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { FiCheck, FiChevronDown } from 'react-icons/fi';

import { ButtonPrimary } from '../../components/CustomButton';

import { useHistory } from 'react-router-dom';

import backgroundHome from '../../assets/background-home.png';
import logo from '../../assets/logo.png';

import * as S from './styles';

import api from '../../services/api';

const Home = () => {
  const [games, setGames] = useState([]);
  const history = useHistory();
  const [selectedGames, setSelectedGames] = useState([]);

  const [loading, setLoading] = useState(false);

  const fetchGames = async () => {
    try {
      await api.get(`/games`)
      .then(response => {
        setGames(response.data);
      });
      setLoading(true);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchGames();
  }, []);

  useEffect(() => {
    const handleSubmitGames = () => {
      selectedGames.length >= 2 &&
      history.push({
        pathname: "/gamescomparison/findByName",
        search: `?names=${selectedGames.join(",")}`
      });
    }

    handleSubmitGames();
  }, [selectedGames, history]);

  const handleSelectGames = (game) => {
    selectedGames.includes(game.name)
      ? setSelectedGames(selectedGames.filter(x => x !== game.name))
      : setSelectedGames([...selectedGames, game.name]);
  }

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
        <Row className="flex-100 justify-content-between mb-4">
          <Col md="12" className="mb-4">
            <S.ListTitle>
              Nome da Tag
            </S.ListTitle>
          </Col>
          <Col md="6" lg="3" className="mb-4">
            <S.GameCard>
              <S.ImageWrapper>
                <img src="https://cdn.akamai.steamstatic.com/steam/apps/1200/header.jpg?t=1551467896" alt="game cover" />
              </S.ImageWrapper>
              <S.GameInfo>
                <h3>Nome do jogo</h3>
                <p>Estudio</p>
              </S.GameInfo>
            </S.GameCard>
          </Col>
          <Col md="6" lg="3" className="mb-4">
            <S.GameCard>
              <S.ImageWrapper>
                <img src="https://cdn.akamai.steamstatic.com/steam/apps/1200/header.jpg?t=1551467896" alt="game cover" />
              </S.ImageWrapper>
              <S.GameInfo>
                <h3>Nome do jogo</h3>
                <p>Estudio</p>
              </S.GameInfo>
            </S.GameCard>
          </Col>
          <Col md="6" lg="3" className="mb-4">
            <S.GameCard>
              <S.ImageWrapper>
                <img src="https://cdn.akamai.steamstatic.com/steam/apps/1200/header.jpg?t=1551467896" alt="game cover" />
              </S.ImageWrapper>
              <S.GameInfo>
                <h3>Nome do jogo</h3>
                <p>Estudio</p>
              </S.GameInfo>
            </S.GameCard>
          </Col>
          <Col md="6" lg="3" className="mb-4">
            <S.GameCard>
              <S.ImageWrapper>
                <img src="https://cdn.akamai.steamstatic.com/steam/apps/1200/header.jpg?t=1551467896" alt="game cover" />
              </S.ImageWrapper>
              <S.GameInfo>
                <h3>Nome do jogo</h3>
                <p>Estudio</p>
              </S.GameInfo>
            </S.GameCard>
          </Col>
        </Row>

        <Row className="flex-100 justify-content-between mb-4">
          <Col md="12" className="mb-4">
            <S.ListTitle>
              Nome da Tag
            </S.ListTitle>
          </Col>
          <Col md="6" lg="3" className="mb-4">
            <S.GameCard>
              <S.ImageWrapper>
                <img src="https://cdn.akamai.steamstatic.com/steam/apps/1200/header.jpg?t=1551467896" alt="game cover" />
              </S.ImageWrapper>
              <S.GameInfo>
                <h3>Nome do jogo</h3>
                <p>Estudio</p>
              </S.GameInfo>
            </S.GameCard>
          </Col>
          <Col md="6" lg="3" className="mb-4">
            <S.GameCard>
              <S.ImageWrapper>
                <img src="https://cdn.akamai.steamstatic.com/steam/apps/1200/header.jpg?t=1551467896" alt="game cover" />
              </S.ImageWrapper>
              <S.GameInfo>
                <h3>Nome do jogo</h3>
                <p>Estudio</p>
              </S.GameInfo>
            </S.GameCard>
          </Col>
          <Col md="6" lg="3" className="mb-4">
            <S.GameCard>
              <S.ImageWrapper>
                <img src="https://cdn.akamai.steamstatic.com/steam/apps/1200/header.jpg?t=1551467896" alt="game cover" />
              </S.ImageWrapper>
              <S.GameInfo>
                <h3>Nome do jogo</h3>
                <p>Estudio</p>
              </S.GameInfo>
            </S.GameCard>
          </Col>
          <Col md="6" lg="3" className="mb-4">
            <S.GameCard>
              <S.ImageWrapper>
                <img src="https://cdn.akamai.steamstatic.com/steam/apps/1200/header.jpg?t=1551467896" alt="game cover" />
              </S.ImageWrapper>
              <S.GameInfo>
                <h3>Nome do jogo</h3>
                <p>Estudio</p>
              </S.GameInfo>
            </S.GameCard>
          </Col>
        </Row>

        <Row className="flex-100 justify-content-between mb-4">
          <Col md="12" className="mb-4">
            <S.ListTitle>
              Nome da Tag
            </S.ListTitle>
          </Col>
          <Col md="6" lg="3" className="mb-4">
            <S.GameCard>
              <S.ImageWrapper>
                <img src="https://cdn.akamai.steamstatic.com/steam/apps/1200/header.jpg?t=1551467896" alt="game cover" />
              </S.ImageWrapper>
              <S.GameInfo>
                <h3>Nome do jogo</h3>
                <p>Estudio</p>
              </S.GameInfo>
            </S.GameCard>
          </Col>
          <Col md="6" lg="3" className="mb-4">
            <S.GameCard>
              <S.ImageWrapper>
                <img src="https://cdn.akamai.steamstatic.com/steam/apps/1200/header.jpg?t=1551467896" alt="game cover" />
              </S.ImageWrapper>
              <S.GameInfo>
                <h3>Nome do jogo</h3>
                <p>Estudio</p>
              </S.GameInfo>
            </S.GameCard>
          </Col>
          <Col md="6" lg="3" className="mb-4">
            <S.GameCard>
              <S.ImageWrapper>
                <img src="https://cdn.akamai.steamstatic.com/steam/apps/1200/header.jpg?t=1551467896" alt="game cover" />
              </S.ImageWrapper>
              <S.GameInfo>
                <h3>Nome do jogo</h3>
                <p>Estudio</p>
              </S.GameInfo>
            </S.GameCard>
          </Col>
          <Col md="6" lg="3" className="mb-4">
            <S.GameCard>
              <S.ImageWrapper>
                <img src="https://cdn.akamai.steamstatic.com/steam/apps/1200/header.jpg?t=1551467896" alt="game cover" />
              </S.ImageWrapper>
              <S.GameInfo>
                <h3>Nome do jogo</h3>
                <p>Estudio</p>
              </S.GameInfo>
            </S.GameCard>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
