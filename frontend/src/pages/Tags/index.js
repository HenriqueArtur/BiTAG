import React from 'react';

import { Col, Container, Row } from 'react-bootstrap';
// import { FiChevronLeft } from 'react-icons/fi';

import { ButtonPrimary, ButtonLight } from '../../components/CustomButton';

import Filter from '../../components/Filter';
import Sorter from '../../components/Sorter';

import SearchBar from '../../components/SearchBar';


import * as S from './styles';


const Tags = () => {
  return (
    <div id="page-tags">
      <Container className="d-flex flex-column">
        <Row className="align-items-center flex-100 justify-content-between mb-4">
          <Col sm="12" md="4" className="mb-3 mb-md-0">
            <Filter />

            <Sorter />
          </Col>

          <Col sm="12" md="4" className="mb-3 mb-md-0 text-center">
            <ButtonPrimary className="px-5 py-3" type="button" uppercase>
              Analisar
            </ButtonPrimary>

            <S.TagCounter>Analisando 4 tags</S.TagCounter>
          </Col>

          <Col sm="12" md="4">
            <SearchBar className="justify-content-center justify-content-md-end" />
          </Col>
        </Row>

        <Row className="flex-100 justify-content-between">
          <S.TagCard>
            <ButtonLight type="button">
              Nome da tag
            </ButtonLight>

            <S.TagQty>50.309 produtos</S.TagQty>
          </S.TagCard>

          <S.TagCard>
            <ButtonLight type="button">
              Nome da tag
            </ButtonLight>

            <S.TagQty>50.309 produtos</S.TagQty>
          </S.TagCard>

          <S.TagCard>
            <ButtonLight type="button">
              Nome da tag
            </ButtonLight>

            <S.TagQty>50.309 produtos</S.TagQty>
          </S.TagCard>

          <S.TagCard>
            <ButtonLight type="button">
              Nome da tag
            </ButtonLight>

            <S.TagQty>50.309 produtos</S.TagQty>
          </S.TagCard>
        </Row>
      </Container>
    </div>
  );
}

export default Tags;
