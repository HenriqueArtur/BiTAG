import React, { useEffect, useState } from 'react';

import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { FiCheck } from 'react-icons/fi';

import { ButtonPrimary } from '../../components/CustomButton';

import Filter from '../../components/Filter';

import SearchBar from '../../components/SearchBar';

import { Link, useHistory } from 'react-router-dom';

import * as S from './styles';

import api from '../../services/api';

const Tags = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [tags, setTags] = useState([]);

  const history = useHistory();

  const [searchTerm, setSearchTerm] = useState("");

  const [loading, setLoading] = useState(false);

  const [sorter, setSorter] = useState('');

  const fetchTags = async () => {
    try {
      await api.get('/tags')
      .then(response => {
        setTags(response.data);
      });
      setLoading(true);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchTags();
  }, [searchTerm]);

  useEffect(() => {
    async function sorterTags() {
      const response = await api.get(`/tags?order=${sorter}`);

      setTags(response.data);
    }

    sorterTags();
  }, [sorter]);

  const handleSelectTag = (tag) => {
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

  const handleSearchTags = () => {
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
            <Filter
              name="sorter"
              label="Ordenar por:"
              value={sorter}
              onChange={e => setSorter(e.target.value)}
              options={[
                {value: 'AZ-ASC', label: 'Alfabética - crescente'},
                {value: 'AZ-DESC', label: 'Alfabética - decrescente'},
                {value: 'games_count-ASC', label: 'Quantidade de jogos - crescente'},
                {value: 'games_count-DESC', label: 'Quantidade de jogos - decrescente'},
                {value: 'revenue-ASC', label: 'Revenue - crescente'},
                {value: 'revenue-DESC', label: 'Revenue - decrescente'}
              ]}
            />
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

        {
          loading ? (
            <Row className="flex-100 justify-content-between px-md-5">
              {tags.map(tag => (
                <S.TagCard key={tag.id} bordered={selectedTags.includes(tag.name) ? true : false}>
                  {
                    selectedTags.includes(tag.name) &&
                    <FiCheck size="20"/>
                  }

                  <S.DataTitle>
                    {tag.name}
                  </S.DataTitle>

                  <S.TagQty>{tag.games_count} {tag.games_count > 1 ? "produtos" : "produto"}</S.TagQty>
                  {
                    !selectedTags.includes(tag.name) &&
                      <S.TagActions>
                        <ButtonPrimary key={tag.id} type="button" onClick={() => handleSelectTag(tag)}>
                          Selecionar
                        </ButtonPrimary>
                        <Link to={{pathname: `/gamestags/${tag.name}`}}>
                          Ver jogos
                        </Link>
                      </S.TagActions>
                  }
                </S.TagCard>
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

export default Tags;
