import * as React from 'react';
import { BrowserRouter as Router, Route, Routes, Link as RouterLink } from 'react-router-dom';
import Home from './pages/Home';
import Registro from './pages/registro/Registro';
const App = () => {

  return (
    <>
    <Router>
      <div style={{background:'black',color:'white', height:'10vh'}}>
        <nav>
        <div><h3><RouterLink to='/'>Incio</RouterLink></h3></div>
        <div>
          <RouterLink to='/registro'>Registrese</RouterLink>
          <RouterLink to='/sesion'>Iniciar Sesión</RouterLink>
        </div>
        </nav>
      </div>
      <div style={{ height:'80vh',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/registro' element={<Registro />} />
        </Routes>
      </div>
      <div style={{background:'black',color:'white', height:'10vh'}}>Footer</div>
    </Router>
    </>
  );
}

export default App;




