import styled, { createGlobalStyle } from 'styled-components';
import variables from './variables';

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }
    body {
    background-color: ${variables.corSecundaria};
    }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 680px;
  margin: 0 auto;
`;

export const MainContainer = styled.main`
  width: 100%;
  padding: 0 40px;
  margin-top: 80px;
  margin-bottom: 90px;
  height: 100vh;
`

export default EstiloGlobal;
