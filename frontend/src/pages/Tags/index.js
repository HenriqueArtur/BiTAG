import React, { useState } from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import { FiCheck } from 'react-icons/fi';

import { ButtonPrimary } from '../../components/CustomButton';

import Filter from '../../components/Filter';
import Sorter from '../../components/Sorter';

import SearchBar from '../../components/SearchBar';

import { Link } from 'react-router-dom';

import * as S from './styles';

const tags = [...Array(10).keys()].map(x => ({ id: x }));

const Tags = () => {
  const [tagSelected, setTagSelected] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  const handleSelectTag = (tag) => {
    // setTagSelected(!tagSelected);

    selectedTags.includes(tag.id)
      ? setSelectedTags(selectedTags.filter(x => x !== tag.id))
      : setSelectedTags([...selectedTags, tag.id]);
  }

  const handleSubmitTags = () => {
    console.log(selectedTags);
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
            <SearchBar className="justify-content-center justify-content-md-end" />
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
                Nome da tag
              </S.DataTitle>

              <S.TagQty>50.309 produtos</S.TagQty>

              <S.TagActions>
                <ButtonPrimary key={tag.id} type="button" onClick={() => handleSelectTag(tag)}>
                  Selecionar {tag.id}
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
