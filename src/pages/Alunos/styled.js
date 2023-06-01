import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as colors from '../../config/colors';

export const AlunoContainer = styled.div`
  margin-top: 20px;

  div {
    padding: 4px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  div + div {
    border-top: 1px solid lightgray;
  }

  .editAndClose .edit {
    color: ${colors.primaryColor};
    padding: 0;
  }

  .editAndClose .close {
    margin-left: 10px;
    color: red;
    padding: 0;
  }

  .editAndClose .confirm {
    margin-left: 10px;
    margin-bottom: 3px;
    color: red;
    padding: 0;
  }

  .editAndClose .close:hover,
  .edit:hover {
    cursor: pointer;
  }
`;

export const ProfilePicture = styled.div`
  img {
    width: 55px;
    height: 55px;
    border-radius: 50%;
  }
`;

export const NovoAluno = styled(Link)`
  display: block;
  width: auto;
  padding-top: 13px;

  &:hover {
    filter: saturate(40%);
  }
`;
