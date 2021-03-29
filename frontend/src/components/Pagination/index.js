import React from 'react';

import { Pagination } from 'react-bootstrap';
import * as S from './styles';

const MAX_ITEMS = 9; //quantidade maxima de itens visualizados
const MAX_LEFT = (MAX_ITEMS - 1) / 2; //quantidade de itens à esquerda/direita
const PAGE_ITEMS = 100; //quantidade de itens por pagina

const CustomPagination = ({ limit, total, page, setPage }) => {
  const current = page ? page / limit + 1 : 1; //pagina atual
  const pages = Math.ceil(total / PAGE_ITEMS); //quantidade de paginas
  const first = Math.max(current - MAX_LEFT, 1); //primeira pagina

  function onPageChange(page) {
    setPage((page - 1) * limit);
  }

  return (
    <S.PaginationContainer>
      <Pagination>
        <Pagination.Prev
          onClick={() => onPageChange(current - 1)}
          className={
            current === 1
              ? 'disabled'
              : null
          }
        />
        {Array.from({ length: Math.min(MAX_ITEMS, pages) }) //array com a quantidade total de paginas limitado pela quantidade maxima de itens visiveis
        .map((_, index) => index + first)
        .map((page) => (
          <Pagination.Item
            key={page}
            onClick={() => onPageChange(page)}
            className={
              page === current
                ? 'active'
                : null
            }
          >
            {page}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => onPageChange(current + 1)}
          className={
            current === pages
              ? 'disabled'
              : null
          }
        />
      </Pagination>
    </S.PaginationContainer>
  );
}

export default CustomPagination;
