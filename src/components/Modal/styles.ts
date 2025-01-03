import styled from 'styled-components';
import variables from '../../styles/variables';

export const ModalOverlay = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8 px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: ${variables.corBotaoDelete};
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  border-radius: 8px;

  &:hover {
    background-color: ${variables.corBotaoDelete};;
  }

  &.cancel {
    background-color: #6c757d;

    &:hover {
      background-color: #5a6268;
    }
  }
`;
