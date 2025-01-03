import styled from 'styled-components';
import variables from '../../styles/variables';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30%;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 70%;

  input {
    margin: 8px 0;
    padding: 10px;
    border-radius: 8px;
    border: none;
    background-color: #dfe4ea;

    &:focus {
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
    }
  }

  textarea {
    margin: 8px 0;
    padding: 10px;
    resize: none;
    border-radius: 8px;
    border: none;
    background-color: #dfe4ea;
  }

  select {
    border-radius: 8px;
    padding: 4px;
  }
`;

export const Titulo = styled.h2`
  margin-bottom: 20px;
  color: ${variables.corDaFonte};
`

export const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  boreder: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  border-radius: 8px;
  border: none;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-bottom: 8px;
`;
