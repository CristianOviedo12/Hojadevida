import React, { useEffect, useRef } from "react";
import {  useNavigate  } from "react-router-dom";
import {Box, Button, Grid} from '@mui/material';
import Humano3D from "./Humano3D";
import styles from './Hojadevida.module.css';

import Primera from "./primera";
import Segunda from "./Segunda";
import Habilidades from "./Habilidades";

import ContactMailIcon from '@mui/icons-material/ContactMail';
import PersonIcon from '@mui/icons-material/Person';
import BuildIcon from '@mui/icons-material/Build';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import NavigationIcon from '@mui/icons-material/Navigation';

const Hojadevida = () => {
    const navigate = useNavigate();
    const logoutTimer = useRef(null);
    const [showHabilidades, setShowHabilidades] = React.useState(false);
    const [showPrimera, setShowPrimera] = React.useState(false);
    const [showSegunda, setShowSegunda] = React.useState(false);
    const handleGoToHabilidades = () => {
      setShowHabilidades(true);
    };
    const handleGoToPrimera = () => {
      setShowPrimera(true);
    }
    const handleGoToSegunda = () => {
      setShowSegunda(true);
    }

    const handleLogout = () => {
        // Eliminar el estado de autenticación de localStorage
        localStorage.removeItem('isAuthenticated');
        // Redirigir al usuario a la página principal o de inicio de sesión
        navigate('/sesion');
        window.location.reload(); // Forzar la carga de la página
    };

    const resetTimer = () => {
        if (logoutTimer.current) {
            clearTimeout(logoutTimer.current);
        }
        //Establecemos un temporizador para cerrar sesión después de 10 minutos de inactividad (600,000 ms)
        logoutTimer.current = setTimeout(() => {
            handleLogout();
        }, 600000); // 10 minutos en milisegundos
    };

    useEffect(()=>{
        //Reseteamos el temporozador cada vez que haya actividad
        window.addEventListener('mousemove', resetTimer);
        window.addEventListener('mousedown', resetTimer);
        window.addEventListener('keypress', resetTimer);
        window.addEventListener('touchmove', resetTimer);

        //Iniciamos el temporizador
        resetTimer();

        return () => {
            //Limpia los eventos y el temporizador al desmontar el componente
            clearTimeout(logoutTimer.current);
            window.removeEventListener('mousemove', resetTimer);
            window.removeEventListener('mousedown', resetTimer);
            window.removeEventListener('keypress', resetTimer);
            window.removeEventListener('touchmove', resetTimer);
        };
    },[]);

    if (showPrimera) {
      return <Primera onBack={() => setShowPrimera(false)}/>
    }
    if (showSegunda) {
      return <Segunda onBack={() => setShowSegunda(false)}/>
    }
    if (showHabilidades) {
      return <Habilidades onBack={() => setShowHabilidades(false)} />
    }
    return (
      <>
        <div className={styles.contHojaVida}>
          
        <Grid  container spacing={3}>
          <Grid item xs={12} sm={4} className="gridItem1">
            
          </Grid>
          <Grid item xs={12} sm={4} className="gridItem2">
            <Humano3D></Humano3D>
          </Grid>
          <Grid item xs={12} sm={4} className="gridItem">
          
          </Grid>
        </Grid>
        
        <div className={styles.boxButtons}>
        <Box className={styles.menu}>
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
          <Button className={styles.menubtn} sx={{ mr: 1, color:'white' }} startIcon={<PersonIcon className={styles.menubtnicon}/>} onClick={handleGoToSegunda}>PERFIL</Button>
          <Button className={styles.menubtn} sx={{ mr: 1, color:'white' }} startIcon={<BuildIcon className={styles.menubtnicon}/>} onClick={handleGoToHabilidades}>HABILIDADES</Button>
          <Button className={styles.menubtn} sx={{ mr: 1, color:'white' }} startIcon={<ContactMailIcon className={styles.menubtnicon}/>} onClick={handleGoToPrimera}>CONTACTO</Button>
        </Box>
      </Box>
  
          
        </div>
        <div className={styles.buttonLogout}>
          <Button className={styles.menubtn} sx={{ mr: 1, color:'white' }} startIcon={<LogoutIcon/>} onClick={handleLogout}>SALIR</Button>
        </div>
      </div>
      </>
      );
}

export default Hojadevida;
