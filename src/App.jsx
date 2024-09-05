import * as React from 'react';
import { BrowserRouter as Router, Route, Routes, Link as RouterLink } from 'react-router-dom';
import Home from './pages/Home';
import Registro from './pages/registro/Registro';  // Usa una ruta relativa
import Iniciosesion from './pages/iniciosesion/Iniciosesion';
import Hojadevida from './pages/paginas/Hojadevida';
import RutaProtegida from './pages/RutaProtegida';
import styled from 'styled-components';

const StyledRouterLink = styled(RouterLink)`
  color: white;
  margin-right: 15px;
  text-decoration: none;
  padding: 5px 10px;

  &:hover {
    background-color: rgba(255, 30, 0, 0.822);
    border-radius: 5px;
    transition: background-color 0.8s ease;
  }
`;

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  React.useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      {isAuthenticated ? (
        <Hojadevida />
      ) : (
        <>
          <div style={{ background: 'black', color: 'white', height: '10vh', display: 'flex', alignItems: 'center' }}>
            <nav>
              <div>
                <StyledRouterLink to='/registro'>Registrese</StyledRouterLink>
                <StyledRouterLink to='/sesion'>Iniciar Sesión</StyledRouterLink>
              </div>
            </nav>
          </div>
          <div style={{ background: 'black', color: 'white', height: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/registro' element={<Registro />} />
              <Route path='/sesion' element={<Iniciosesion setIsAuthenticated={setIsAuthenticated} />} />
              <Route path='/secret' element={<RutaProtegida component={Hojadevida} isAuthenticated={isAuthenticated} />} />
            </Routes>
          </div>
          <div style={{ background: 'black', color: 'white', height: '10vh', display: 'flex', alignItems: 'center' }}>
            <i style={{ fontSize: '12px' }}>Cristian Mauricio Oviedo Pacheco</i>
            <i style={{ fontSize: '12px' }}>-coviedop4@gmail.com</i>
          </div>
        </>
      )}
    </Router>
  );
}

export default App;
