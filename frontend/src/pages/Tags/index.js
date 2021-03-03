import React from 'react';

import { Col, Container, Form, Row } from 'react-bootstrap';
import { FiChevronLeft } from 'react-icons/fi';

import { ButtonPrimary, ButtonLight } from '../../components/CustomButton';
import SearchBar from '../../components/SearchBar';

import * as S from './styles';


const Tags = () => {
  return (
    <div id="page-tags">
      <Container className="d-flex flex-column">
        <Row className="align-items-center flex-100 justify-content-between mb-4">
          <Col>
            <Form inline>
              <Form.Label>Filtros: </Form.Label>
              <S.Select>
                <S.Option>Novos lançamentos</S.Option>
                <S.Option>Antigos lançamentos</S.Option>
              </S.Select>
            </Form>

            <Form inline>
              <Form.Label>Ordenar por: </Form.Label>
              <S.Select>
                <S.Option>Mais populares (crescente)</S.Option>
                <S.Option>Mais populares (decrescente)</S.Option>
              </S.Select>
            </Form>
          </Col>

          <Col className="text-center">
            <ButtonPrimary className="px-5 py-3" type="button" uppercase>
              Analisar
            </ButtonPrimary>

            <S.TagCounter>Analisando 4 tags</S.TagCounter>
          </Col>

          <Col>
            <SearchBar className="justify-content-end" />
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
