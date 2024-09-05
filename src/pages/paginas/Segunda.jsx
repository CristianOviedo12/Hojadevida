import React, { useState } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import styles from './Segunda.module.css';
import { Box, Button, Fab } from '@mui/material';
import Imagenes from './imagenes';

import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';

const Primera = ({ onBack }) => {
  // Array con los diferentes contenidos que quieres mostrar
  const contenidos = [
    {
      titulo: "Técnico en Análisis y Programación",
      descripcion: "Soy un técnico en Análisis y Programación con una pasión y entrega por el trabajo, creación y mantenimiento de proyectos en React + TypeScript y un gusto por la implementación del diseño y funcionalidad usando el Material UI, Bootstrap y CSS. Con mi capacidad de aprender, entender y gestionar he logrado conocer diferentes herramientas y así trabajar con ellas en aplicaciones de escritorio y web.", 
    },
    {
      titulo: "Experiencia Académica y Laboral",
      descripcion: "1. Me he encargado de la parte visual y funcional de diferentes proyectos, implementando lo hecho en Figma y usando Git y GitHub para trabajar en conjunto con otros desarrolladores. Además, he usado Java para proyectos de escritorio, y tecnologías como PHP, JavaScript, React + TypeScript para hacer proyectos web funcionales.",
      descripcion2: "2. Realicé las prácticas en sistemas en la Universidad EAFIT con responsabilidades en dar apoyo a los equipos en sistema operativo y hardware, así como soporte a usuarios."
    },
    {
      titulo: "Educación",
      descripcion:"Técnica Laboral en Análisis y programación...",
      descripcion2:"Diplomado en desarrollo web 2021-2022...",
    },
    {
      titulo: "Intereses",
      descripcion:"Desarrollar nuevas ideas",
      descripcion2:"Tecnología y computación",
      descripcion3:"Trabajo constante",
    },
    // Puedes agregar más contenidos aquí
  ];

  // Estado para controlar el índice del contenido actual
  const [indiceContenido, setIndiceContenido] = useState(0);

  // Función para mostrar el contenido anterior
  const handleLeftClick = () => {
    setIndiceContenido((prevIndice) =>
      prevIndice === 0 ? contenidos.length - 1 : prevIndice - 1
    );
  };

  // Función para mostrar el contenido siguiente
  const handleRightClick = () => {
    setIndiceContenido((prevIndice) =>
      prevIndice === contenidos.length - 1 ? 0 : prevIndice + 1
    );
  };

  return (
    <Box className={styles.cajaMayor}>

      <Box className={styles.menu}>

        <Box sx={{ '& > :not(style)': { m: 1 } }}>
          <Button className={styles.menubtn} sx={{ mr: 1, color:'white' }} startIcon={<NavigationIcon className={styles.menubtnicon}/>}  onClick={onBack}>Regresar</Button>
        </Box>

      </Box>

      <Box className={styles.cajaContenido}>



        <div className={styles.informacion}>

        <div className={styles.navegacion}>
          <KeyboardArrowLeftIcon  className={styles.keyboard}
            sx={{ fontSize:'50px' }} 
            onClick={handleLeftClick} 
          />
        </div>

          <div className={styles.infotext}>
          <h1>{contenidos[indiceContenido].titulo}</h1>
          <p>{contenidos[indiceContenido].descripcion}</p>
          <p>{contenidos[indiceContenido].descripcion2}</p>
          <p>{contenidos[indiceContenido].descripcion3}</p>
          </div>

          <div className={styles.navegacion}>
          <KeyboardArrowRightIcon className={styles.keyboard}   
            sx={{ fontSize:'50px' }} 
            onClick={handleRightClick} 
          />
        </div>
        </div>



        <div className={styles.contenidoimg}>
          <Imagenes/>
        </div>

      </Box>
    </Box>
  );
}

export default Primera;
