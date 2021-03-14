import React, { useEffect, useState } from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import { FiCheck } from 'react-icons/fi';

import { ButtonPrimary } from '../../components/CustomButton';

import Filter from '../../components/Filter';
import Sorter from '../../components/Sorter';

import SearchBar from '../../components/SearchBar';

import { Link, useHistory } from 'react-router-dom';

import * as S from './styles';

import api from '../../services/api';

const Tags = () => {
  const [tagSelected, setTagSelected] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [tags, setTags] = useState([]);

  const history = useHistory();

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    api.get('/tags')
    .then(response => {
      setTags(response.data);
    }).catch(err => {
      console.log(err);
    });
  }, [searchTerm]);

  const handleSelectTag = (tag) => {
    // setTagSelected(!tagSelected);

    selectedTags.includes(tag.name)
      ? setSelectedTags(selectedTags.filter(x => x !== tag.name))
      : setSelectedTags([...selectedTags, tag.name]);
  }

  const handleSubmitTags = () => {
    history.push({
      pathname: "/tagscomparison/findByName",
      search: `?tags=${selectedTags.join(",")}`
    });
  }

  const handleSearchTags = (e) => {
    e.preventDefault();

    setTags(
      tags.filter((tag) =>
        tag.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }

  return (
    <div id="page-tags">
      <Container className="d-flex flex-column">
        <Row className="align-items-center flex-100 justify-content-between mb-4">
          <Col sm="12" md="4" className="mb-3 mb-md-0">
            <Filter />

            <Sorter />
          </Col>

          <Col sm="12" md="4" className="mb-3 mb-md-0 text-center">
            {
              selectedTags.length >= 1 &&
              <ButtonPrimary onClick={() => handleSubmitTags()} className="px-5 py-3" type="button" uppercase>
                Analisar
              </ButtonPrimary>
            }

            <S.TagCounter>Analisando {selectedTags.length} {selectedTags.length > 1 ? "tags" : "tag"}</S.TagCounter>
          </Col>

          <Col sm="12" md="4">
            <SearchBar
              className="justify-content-center justify-content-md-end"
              onChange={e => setSearchTerm(e.target.value)}
              value={searchTerm}
              onClick={handleSearchTags}
            />
          </Col>
        </Row>

        <Row className="flex-100 justify-content-between px-md-5">
          {tags.map((tag) => (
            <S.TagCard key={tag.id} selectedTags={selectedTags} tagSelected={tagSelected}>
              {/* {
                selected &&
                <FiCheck size="20"/>
              } */}

              <S.DataTitle>
                {tag.name}
              </S.DataTitle>

              <S.TagQty>{tag.games_count} {tag.games_count > 1 ? "produtos" : "produto"}</S.TagQty>

              <S.TagActions>
                <ButtonPrimary key={tag.id} type="button" onClick={() => handleSelectTag(tag)}>
                  Selecionar
                </ButtonPrimary>
                <Link to="/games">
                  Ver jogos
                </Link>
                <Link to="/">
                  Ver descrição
                </Link>
              </S.TagActions>
            </S.TagCard>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Tags;
