import React, { useEffect, useState } from 'react';

import { Container, Row, Table } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

import { FiChevronLeft } from 'react-icons/fi';
import NumberFormat from 'react-number-format';

import * as S from './styles';

import api from '../../services/api';

const TagsComparison = (props) => {
  const [tags, setTags] = useState([]);
  const history = useHistory();

  const  search = history.location.search;

  useEffect(() => {
    api.get(`/tags/findByName${search}`).then(response => {
      setTags(response.data);
    });
  }, [search]);

  return (
    <div id="page-tagscomparison">
      <Container>
        <Row>
          <Link to="/tags">
            <FiChevronLeft color="#66fcf1" size={25} />
            Voltar
          </Link>
        </Row>

        <Row className="mt-4">
          <Table responsive borderless>
            <thead>
              <S.TRow>
                <S.THead>Selected Tags</S.THead>
                <S.THead>Revenue 0k-5k</S.THead>
                <S.THead>Revenue 5k-25k</S.THead>
                <S.THead>Revenue 25k-100k</S.THead>
                <S.THead>Revenue 100k-200k</S.THead>
                <S.THead>Revenue 200k-500k</S.THead>
                <S.THead>Revenue 500k-1M</S.THead>
                <S.THead>Revenue 1M-5M</S.THead>
                <S.THead>Revenue 5M</S.THead>
              </S.TRow>
            </thead>
            <tbody>
              {tags.map((tag) => (
                <tr key={tag.id}>
                  <S.DataTitle>
                    {tag.name}
                  </S.DataTitle>
                  <S.TData>
                    <NumberFormat
                      displayType={'text'}
                      suffix={'%'}
                      decimalScale={2}
                      value={tag.revenue_0k_5k * 100}
                    />
                  </S.TData>
                  <S.TData>
                    <NumberFormat
                      displayType={'text'}
                      suffix={'%'}
                      decimalScale={2}
                      value={tag.revenue_5k_25k * 100}
                    />
                  </S.TData>
                  <S.TData>
                    <NumberFormat
                      displayType={'text'}
                      suffix={'%'}
                      decimalScale={2}
                      value={tag.revenue_25k_100k * 100}
                    />
                  </S.TData>
                  <S.TData>
                    <NumberFormat
                      displayType={'text'}
                      suffix={'%'}
                      decimalScale={2}
                      value={tag.revenue_100k_200k * 100}
                    />
                  </S.TData>
                  <S.TData>
                    <NumberFormat
                      displayType={'text'}
                      suffix={'%'}
                      decimalScale={2}
                      value={tag.revenue_200k_500k * 100}
                    />
                  </S.TData>
                  <S.TData>
                    <NumberFormat
                      displayType={'text'}
                      suffix={'%'}
                      decimalScale={2}
                      value={tag.revenue_500k_1M * 100}
                    />
                  </S.TData>
                  <S.TData>
                    <NumberFormat
                      displayType={'text'}
                      suffix={'%'}
                      decimalScale={2}
                      value={tag.revenue_1M_5M * 100}
                    />
                  </S.TData>
                  <S.TData>
                    <NumberFormat
                      displayType={'text'}
                      suffix={'%'}
                      decimalScale={2}
                      value={tag.revenue_5M * 100}
                    />
                  </S.TData>
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>
      </Container>
    </div>
  );
}

export default TagsComparison;
