import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EstiloGlobal, { Container } from './styles';
import store from './store';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/add-contact',
    element: <Cadastro />
  }
])

function App() {

  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  );
}

export default App;
