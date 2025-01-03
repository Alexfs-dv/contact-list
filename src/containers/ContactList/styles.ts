import styled from 'styled-components';

export const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;

  button {
    background-color: #f00;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
    margin-top: 10px;
    margin-right: 10px;

    &:hover {
      background-color: #c00;
    }
  }

  button:nth-child(2) {
    background-color: #00f;

    &:hover {
      background-color: #00c;
    }
  }

  button:nth-child(3) {
    background-color: #0c0
  }
`;
export const ListItem = styled.div`
  border: none;
`;
