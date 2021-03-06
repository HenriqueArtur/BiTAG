import React, { useEffect, useState } from 'react';

import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { FiCheck } from 'react-icons/fi';

import { useParams, useHistory } from 'react-router-dom';

import { ButtonPrimary } from '../../components/CustomButton';

import gamePlaceholder from '../../assets/placeholder-game.png';

import Filter from '../../components/Filter';

import SearchBar from '../../components/SearchBar';

import * as S from './styles';

import api from '../../services/api';

const GamesTags = () => {
  const { tag_name } = useParams();
  const [gamesTags, setGamesTags] = useState([]);

  const history = useHistory();
  const [selectedGames, setSelectedGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [loading, setLoading] = useState(false);

  const [filter, setFilter] = useState('');
  const [sorter, setSorter] = useState('');

  useEffect(() => {
    const fetchGamesTags = async () => {
      try {
        await api.get(`/games/findByTags?tags=${tag_name}`)
        .then(response => {
          setGamesTags(response.data);
        });
        setLoading(true);
      } catch (err) {
        console.log(err);
      }
    }

    fetchGamesTags();
  }, [tag_name, searchTerm]);

  const handleSelectGames = (game) => {
    selectedGames.includes(game.name)
      ? setSelectedGames(selectedGames.filter(x => x !== game.name))
      : setSelectedGames([...selectedGames, game.name]);
  }

  const handleSubmitGames = () => {
    history.push({
      pathname: "/gamescomparison/findByName",
      search: `?names=${selectedGames.join(",")}`
    });
  }

  const handleSearchGames = () => {
    setGamesTags(
      gamesTags.filter((game) =>
        game.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }

  useEffect(() => {
    async function filterGames() {
      const response = await api.get(`/games?order=${filter}`);

      setGamesTags(response.data);
    }

    filterGames();
  }, [filter]);

  useEffect(() => {
    async function sorterGames() {
      const response = await api.get(`/games?order=${sorter}`);

      setGamesTags(response.data);
    }

    sorterGames();
  }, [sorter]);

  return (
    <div id="page-gamestags">
      <Container className="d-flex flex-column">
        <Row className="align-items-center flex-100 justify-content-between mb-4">
          <Col sm="12" md="4" className="mb-3 mb-md-0">
            <Filter
              name="filter"
              label="Filtrar por:"
              value={filter}
              onChange={e => setFilter(e.target.value)}
              options={[
                {value: 'price-ASC', label: 'Preço - ascendente'},
                {value: 'price-DESC', label: 'Preço - decrescente'},
                {value: 'positive_reviews-ASC', label: 'Reviews positivas - ascendente'},
                {value: 'positive_reviews-DESC', label: 'Reviews positivas - decrescente'},
                {value: 'negative_reviews-ASC', label: 'Reviews negativas - ascendente'},
                {value: 'negative_reviews-DESC', label: 'Reviews negativas - decrescente'},
                {value: 'owners-ASC', label: 'Owners - ascendente'},
                {value: 'owners-DESC', label: 'Owners - decrescente'}
              ]}
            />

            <Filter
              name="sorter"
              label="Ordenar por:"
              value={sorter}
              onChange={e => setSorter(e.target.value)}
              options={[
                {value: 'AZ-ASC', label: 'Alfabética - ascendente'},
                {value: 'AZ-DESC', label: 'Alfabética - decrescente'},
                {value: 'revenue-ASC', label: 'Revenue - ascendente'},
                {value: 'revenue-DESC', label: 'Revenue - decrescente'}
              ]}
            />
          </Col>

          <Col sm="12" md="4" className="mb-3 mb-md-0 text-center">
            {
              selectedGames.length >= 1 &&
              <ButtonPrimary onClick={() => handleSubmitGames()} className="px-5 py-3" type="button" uppercase>
                Analisar
              </ButtonPrimary>
            }

            <S.GameCounter>Analisando {selectedGames.length} {selectedGames.length > 1 ? "jogos" : "jogo"}</S.GameCounter>
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

        {
          loading ? (
            <Row className="flex-100 justify-content-between">
              {gamesTags.map(game => (
                <Col key={game.id} md="6" lg="4" className="mb-4">
                  <S.GameCard selected={selectedGames.includes(game.name) ? true : false}>
                    <S.ImageWrapper>
                      {
                        game.header_image === null
                        ? (
                          <img src={gamePlaceholder} alt="game cover" />
                        ) : (
                          <img src={game.header_image} alt="game cover" />
                        )
                      }

                      {
                        !selectedGames.includes(game.name) &&
                        <S.GameActions>
                          {
                            selectedGames.length <= 4 &&
                            <ButtonPrimary onClick={() => handleSelectGames(game)} uppercase type="button">
                              Selecionar
                            </ButtonPrimary>
                          }

                          {
                            selectedGames.length < 1 &&
                            <S.ViewGame to={{pathname: `/game/${game.name}`}} uppercase>
                              Visualizar
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

export default GamesTags;
