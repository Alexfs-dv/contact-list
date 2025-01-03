import styled from 'styled-components';
import variables from '../../styles/variables';

export const CardContainer = styled.div`
  position: fixed;
  left: 0;
  width: 100%;
  background-color: ${variables.corPrimaria};
  display: flex;
  justify-content: center;
  padding: 10px;
  margin-top: 20px;
  position: fixed;
  bottom: 0;
`

export const Card = styled.div<{ isSelected: boolean }>`
  background-color: ${({ isSelected }) => (isSelected ? variables.corTerciaria : '#40739e')};
  border-radius: 5px;
  border: none;
  padding: 20px;
  width: 150px;
  text-align: center;
  margin-right: 12px;
  cursor: pointer;
  font-size: 14px;
  color: ${({ isSelected }) => (isSelected ? variables.corDaFonte : '#353b48')};
`
