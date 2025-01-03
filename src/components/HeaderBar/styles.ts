import styled from 'styled-components';
import variables from '../../styles/variables';

export const HeaderBarContainer = styled.div`
  position: fixed;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 16px;
  background-color: ${variables.corPrimaria};
  color: ${variables.corDaFonte};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 24px;
`;

export const SearchInput = styled.input`
  padding: 8px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
`;
