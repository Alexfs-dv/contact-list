import styled from 'styled-components';
import variables from '../../styles/variables';

export const Card = styled.div<{ isSelected: boolean }>`
  width: 100%;
  background-color: ${({ isSelected }) => (isSelected ? '#dcdde1' : '#7f8fa6')};
  padding: 6px;
  margin-bottom: 6px;
  border: 2px solid #ccc;
  cursor: pointer;
  transition: background-color 0.3s;
  border-radius: 6px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .icon {
    margin-right: 8px;
  }

  .plusDash-icon {
    font-size: 1.2rem;
    color: #000;
  }

  p {
    display: flex;
    align-items: center;
  }

  .contactGroup {
    display: inline-block;
    background-color:${variables.corSecundaria};
    color: #fff;
    box-sizing: border-box;
    padding: 4px;
    border-radius: 6px;
    margin: 6px 0;
  }

  .details {
    margin-top: 6px;
    margin-bottom: 90px;
  }

  input, select, textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 6px;
  }

  textarea {
    resize: none;
    color: #95a5a6;
    background-color: #f5f6fa;
    height: 100px;
  }


  button {
    color: ${variables.corDaFonte}
    border: none;
    padding: 8px 12px;
    cursor: pointer;
    border-radius: 4px;
    margin-top: 6px;
  }

  .btn-save {
    background-color: ${variables.corBotaoSave};

    &:hover {
      background-color: ${variables.corBotaoSaveHover};
    }
  }

  .btn-cancel {
    background-color: ${variables.corBotaoCancel};

    &:hover {
      background-color: ${variables.corBotaoCancelHover};
  }

  .btn-delete {
    background-color: ${variables.corBotaoDelete};

    &:hover {
      background-color: ${variables.corBotaoDeleteHover};
    }
  }

  .btn-edit {
    background-color: ${variables.corBotaoEdit};
  }
`;
