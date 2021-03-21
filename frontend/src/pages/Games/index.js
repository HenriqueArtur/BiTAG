import React, { useEffect, useState } from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import { FiCheck } from 'react-icons/fi';

import { ButtonPrimary } from '../../components/CustomButton';


import Filter from '../../components/Filter';
import Sorter from '../../components/Sorter';

import SearchBar from '../../components/SearchBar';

import * as S from './styles';

import api from '../../services/api';

const Games = () => {
  const [visible, setVisible] = useState(true);
  const [selected, setSelected] = useState(false);

  const [games, setGames] = useState([]);

  useEffect(() => {
    api.get(`/api/games`)
    .then(response => {
      setGames(response.data);
    }).catch(err => {
      console.log(err);
    });
  }, []);

  function handleSelectGame() {
    setSelected(!selected);
    setVisible(false);
  }

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
          {games.map(game => (
            <Col key={game.id} md="6" lg="4" className="mb-4">
              <S.GameCard>
                <S.ImageWrapper selected={selected ? 1 : 0}>
                  <img src={game.header_image} alt="game cover" />

                  <S.GameActions>
                    <ButtonPrimary onClick={handleSelectGame} uppercase type="button">
                      Comparar
                    </ButtonPrimary>

                    <S.ViewGame to={{pathname: `/game/${game.name}`}} uppercase visible={visible ? 1 : 0}>
                      Analisar
                    </S.ViewGame>
                  </S.GameActions>

                  <S.GameSelected>
                    <FiCheck size="20" color="#222"/>
                    <h3>Selecionado</h3>
                  </S.GameSelected>
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
