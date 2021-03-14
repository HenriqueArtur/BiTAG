import React, { useEffect, useState } from 'react';

import { Container, Row, Table } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

import { FiChevronLeft } from 'react-icons/fi';
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
    <div id="page-tags-comparison">
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
                <S.THead>Metrica (Example)</S.THead>
                <S.THead>Metrica (Example)</S.THead>
                <S.THead>Metrica (Example)</S.THead>
              </S.TRow>
            </thead>
            <tbody>
              {tags.map((tag) => (
                <tr key={tag.id}>
                  <S.DataTitle>
                    {tag.name}
                  </S.DataTitle>
                  <S.TData>
                    +10s
                  </S.TData>
                  <S.TData>
                    -10.000 $
                  </S.TData>
                  <S.TData>
                    +10%
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
