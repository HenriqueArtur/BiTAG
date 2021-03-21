import React, { useEffect, useState } from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import { FiCheck } from 'react-icons/fi';

import { ButtonPrimary } from '../../components/CustomButton';

import { useHistory } from 'react-router-dom';

import Filter from '../../components/Filter';
import Sorter from '../../components/Sorter';

import SearchBar from '../../components/SearchBar';

import * as S from './styles';

import api from '../../services/api';

const Games = () => {
  const [games, setGames] = useState([]);

  const history = useHistory();

  const [selectedGames, setSelectedGames] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    api.get(`/api/games`)
    .then(response => {
      setGames(response.data);
    }).catch(err => {
      console.log(err);
    });
  }, [searchTerm]);

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

  const handleSearchGames = () => {
    setGames(
      games.filter((game) =>
        game.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }

  return (
    <div id="page-games">
      {
        console.log(selectedGames)
      }
      <Container className="d-flex flex-column">
        <Row className="align-items-center flex-100 justify-content-between mb-4">
          <Col sm="12" md="4" className="mb-3 mb-md-0">
            <Filter />

            <Sorter />
          </Col>

          <Col sm="12" md="4">
            <SearchBar
              className="justify-content-center justify-content-md-end"
              onChange={e => setSearchTerm(e.target.value)}
              value={searchTerm}
              onClick={handleSearchGames}
            />
          </Col>
        </Row>

        <Row className="flex-100 justify-content-between">
          {games.map(game => (
            <Col key={game.id} md="6" lg="4" className="mb-4">
              <S.GameCard>
                <S.ImageWrapper>
                  <img src={game.header_image} alt="game cover" />

                  {
                    !selectedGames.includes(game.name) &&
                    <S.GameActions>

                      <ButtonPrimary onClick={() => handleSelectGames(game)} uppercase type="button">
                        Comparar
                      </ButtonPrimary>
                      {
                        selectedGames.length < 1 &&
                        <S.ViewGame to={{pathname: `/game/${game.name}`}} uppercase>
                          Analisar
                        </S.ViewGame>
                      }

                    </S.GameActions>
                  }

                  {
                    selectedGames.includes(game.name) &&
                    <S.GameSelected>
                      <FiCheck size="20" color="#222"/>
                      <h3>Selecionado</h3>
                    </S.GameSelected>
                  }
                </S.ImageWrapper>
                <S.GameInfo>
                  <h3>{game.name}</h3>
                  <p>{game.publisher_name}</p>
                </S.GameInfo>
              </S.GameCard>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Games;
