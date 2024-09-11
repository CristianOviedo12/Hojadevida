import * as React from 'react';
import { BrowserRouter as Router, Route, Routes, Link as RouterLink } from 'react-router-dom';
import Home from './pages/Home';

import Perfil from './pages/paginas/Perfil';
import Tecnologias from './pages/paginas/Tecnologias';
import Contacto from './pages/paginas/Contacto';

import styled from 'styled-components';
import Styles from './App.module.css';

const StyledRouterLink = styled(RouterLink)`
  color: white;
  text-decoration: none;
  padding: 7px 10px;

  &:hover {
    color: rgba(255, 30, 0, 0.822);
    border-radius: 4px;
    transition: color 0.8s ease;
    border-bottom: 1px solid rgba(255, 30, 0, 0.822) ;
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
        <>
          <div className={Styles.divMenu}>
            <nav>
              <div>
                <StyledRouterLink to='/'>Inicio</StyledRouterLink>
                <StyledRouterLink to='/perfil'>Perfil</StyledRouterLink>
                <StyledRouterLink to='/tecnologias'>Tecnologías</StyledRouterLink>
                <StyledRouterLink to='/contacto'>Contacto</StyledRouterLink>

              </div>
            </nav>
          </div>
          <div style={{ background: 'black', color: 'white', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',paddingBottom:'10px' }}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/perfil' element={<Perfil/>} />
              <Route path='/tecnologias' element={<Tecnologias/>} />
              <Route path='/contacto' element={<Contacto/>} />
            </Routes>
          </div>
          <div style={{ background: 'black', color: 'white', height: '10vh', display: 'flex', alignItems: 'center' }}>
            <p style={{ fontSize: '12px' }}>Cristian Mauricio Oviedo Pacheco</p>
          </div>
        </>
    </Router>
  );
}

export default App;
