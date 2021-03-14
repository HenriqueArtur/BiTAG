import styled from 'styled-components';

import { LinkPrimary } from '../../components/LinkButton';

export const GameCard = styled.div`
  align-items: center;
  display: flex;
  border: 1px solid transparent;
  border-radius: 5px;
  flex-direction: column;
  justify-content: space-between;
`;

export const GameInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: .5rem 0 0;
  width: 100%;

  h3 {
    font-size: 1rem;
  }

  p {
    color: var(--main-color);
    font-size: .9rem;
    margin: 0;
  }
`;

export const GameActions = styled.div`
  display: none;
  flex-direction: column;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);

  button,
  a {
    padding: .7rem 2rem;

    & + button,
    & + a {
      margin-top: .8rem;
    }

  }
`;

export const ViewGame = styled(LinkPrimary).attrs(props => ({
  visible: props.visible ? "flex" : "none"
}))`
  display: ${props => props.visible};
`;

export const GameSelected = styled.div`
  align-items: center;
  display: none;
  flex-direction: column;
  justify-content: center;
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-50%, -50%);

  svg {
    border: 1px solid var(--color-black);
    border-radius: 50%;
  }

  h3 {
    color: var(--color-black);
    font-size: 1rem;
    font-weight: 700;
    margin: .5rem 0 0;
    text-transform: uppercase;
  }
`;

export const ImageWrapper = styled.div.attrs(props => ({
  selected: props.selected ? "none" : "flex"
}))`
  border: 2px solid transparent;
  border-radius: 10px;
  display: flex;
  overflow: hidden;
  position: relative;

  &:hover {
    background-color: rgba(102, 252, 241, 0.5);
    border-color: var(--main-color);

    > img {
      z-index: -1;
    }

    ${GameActions} {
      display: ${props => props.selected};
    }
  }
`;
