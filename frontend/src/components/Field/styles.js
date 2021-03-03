import styled from 'styled-components';

import { FormControl } from 'react-bootstrap';

export const Field = styled.div`
  display: flex;
  flex-direction: column;

  & + div {
    margin-top: 20px;
  }
`;

export const Label = styled.label`
  color: var(--color-white);
  font-weight: 700;
  margin-bottom: .5rem;
`;

export const Input = styled(FormControl)`
  border: 1px solid ${props => props.bordered ? "var(--main-color)" : "transparent"};
  border-radius: 5px;
  padding: 10px 15px;

  &:focus {
    border-color: inherit;
    box-shadow: none;
    outline: 0;
  }
`;
