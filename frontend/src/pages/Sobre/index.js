import React from 'react';

import { Container, Row } from 'react-bootstrap';
import logo from '../../assets/logo.png';

import * as S from './styles';

const Sobre = () => {
  return (
    <div id="page-sobre">
      <Container id="tags" className="d-flex flex-column">
        <Row className="justify-content-center mb-5">
          <S.Logo src={logo} alt="BiTAG logo" />
        </Row>

        <Row className="justify-content-center flex-column pb-5">
          <S.Info>
            <p>
              Estamos aqui para apresentar o BiTAG a primeira plataforma de comparação de dados de jogos com foco nos produtores indies.
              Nosso objetivo é otimizar o tempo de pesquisa dos desenvolvedores por meio de comparação
              de dados para melhores decisões estratégicas de produção
            </p>
            <p>
              A ideia surgiu quando um de nossos desenvolvedores precisou fazer uma pesquisa para tomada de decisão estratégica de seu último jogo,
              porém não encontrou nenhuma plataforma que pudesse  fornecer essas informações de forma comparativa.
              O presso de uma pesquisa desse porte pode ser acessível para uma grande empresa,
              porém é inviável para desenvolvedores indies.Diante dessa dor uma equipe composta de profissionais com 2 anos de experiência em produção
              de jogos, 1 ano em análise de dados em BI, 3 anos de desenvolvimento web e 7 anos em desenvolvimento de peças gráficas
              e virtuais decidimos nos juntar para fundar a Unicórnio Punk e desenvolver o BiTAG.
            </p>
            <p>
              Na nossa página de tags, você pode selecionar quantas tags quiser para analisá-las.
              Na tela de jogos, selecione de dois a cinco jogos para ver seus dados de forma comparativa.
              Também é possível visualizá-los tanto individualmente quanto visualizar os jogos a partir de suas tags.
            </p>

            <strong>
              Steam and the Steam logo are trademarks of Valve Corporation.
              All other trademarks are property of their respective owners.
              Fair use disclaimer
            </strong>
          </S.Info>

          <S.Credits>
            Powered by <span>Unicórnio Punk</span>
          </S.Credits>
        </Row>
      </Container>
    </div>
  );
}

export default Sobre;
