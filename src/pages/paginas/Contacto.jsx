import React, { useState } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import styles from './Contacto.module.css';
import { Avatar, Box, Button, Stack } from '@mui/material';
import NavigationIcon from '@mui/icons-material/Navigation';
import image from '../../assets/CristianOviedoFoto.jpg';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contacto = () => {
  return (
    <Box className={styles.cajaMayor}>

      <Box className={styles.infoContacto}>

        <Box className={styles.avatar}>
          <Stack className={styles.stack} direction="row" spacing={2}>
            <Avatar 
                className={styles.stackAvatar} 
                alt="Remy Sharp" 
                src={image} 
                sx={{ width: 200, height: 200 }}
            />
            </Stack>
        </Box>

        <Box className={styles.informacion}>
          <div>
            <Button
              className={styles.btnwhatsapp}
              sx={{
                background: 'white',
                color: 'black',
                transition: 'all 0.5s',
                marginLeft: '10px',
                marginRight: '10px',
                padding: '10px', 
                borderRadius: '50%', 
                minWidth: '50px', 
                minHeight: '50px',
                '&:hover': {
                  background: 'white',
                  color: 'black',
                  boxShadow: '0px 0px 5px 0px white',
                }
              }}
              onClick={() => {
                window.open("https://wa.me/573148832050?text=Hola,%20hemos%20visto%20algo%20interesante%20en%20tu%20perfil.%20¿Te%20gustaría%20participar%20en%20nuestra%20selección%20de%20candidatos?", "_blank");
              }}><WhatsAppIcon /></Button>
          </div>
          <div>
            <Button
              sx={{
                background: 'white',
                color: 'black',
                transition: 'all 0.5s',
                marginLeft: '10px',
                marginRight: '10px',
                padding: '10px',
                borderRadius: '50%',
                minWidth: '50px',
                minHeight: '50px',
                '&:hover': {
                  background: 'white',
                  color: 'black',
                  boxShadow: '0px 0px 5px 0px white',
                }
              }}
              onClick={() => {
                window.location.href = "mailto:coviedop4@gmail.com?subject=Selección%20de%20candidatos&body=Hola,%20hemos%20visto%20algo%20interesante%20en%20tu%20perfil.%20Nos%20gustaría%20invitarte%20a%20participar%20en%20nuestra%20selección%20de%20candidatos.%20Por%20favor,%20contáctanos%20para%20más%20detalles.";
              }}><EmailIcon /></Button>
          </div>
  
          <div>
            <Button
              sx={{
                background: 'white',
                color: 'black',
                transition: 'all 0.5s',
                marginLeft: '10px',
                marginRight: '10px',
                padding: '10px',
                borderRadius: '50%',
                minWidth: '50px',
                minHeight: '50px',
                '&:hover': {
                  background: 'white',
                  color: 'black',
                  boxShadow: '0px 0px 5px 0px white',
                }
              }}
              onClick={() => {
                window.open("https://www.google.com/maps/search/?api=1&query=6.334771736379562,-75.5582298730529", "_blank");
              }}><LocationOnIcon /></Button>
          </div>
        </Box>
      </Box>
    </Box>
  );
}

export default Contacto;
