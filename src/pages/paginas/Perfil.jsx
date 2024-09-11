import React, { useState } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import styles from './Perfil.module.css';
import { Box, Button, Fab } from '@mui/material';
import Imagenes from './imagenes';

import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';

const Perfil = () => {
  // Array con los diferentes contenidos que quieres mostrar
  const contenidos = [
    {
      titulo: "Técnico en Análisis y Programación",
      descripcion: "Es un técnico en Análisis y Programación con una gran pasión y dedicación por su trabajo, enfocado en la creación y mantenimiento de proyectos. Posee experiencia en React, JavaScript y TypeScript, y muestra un gusto particular por la implementación de diseño y funcionalidad utilizando herramientas como Material UI, Bootstrap y CSS. Gracias a su capacidad para aprender, comprender y gestionar, ha logrado familiarizarse con diversas tecnologías, permitiéndole trabajar con eficiencia tanto en aplicaciones de escritorio como en entornos web.", 
    },
    {
      titulo: "Experiencia Académica y Laboral",
      descripcion: "1. Implementé la parte visual y funcional de diversos proyectos, utilizando Figma para el diseño y Git y GitHub para la colaboración con otros desarrolladores. Además, desarrolló proyectos de escritorio en Java y proyectos web funcionales con PHP, JavaScript, React y TypeScript.",
      descripcion2: "2. Colaboré en la mejora de la página web de la Universidad EAFIT, enfocándome en el software para estudiantes. Proporcioné soporte en sistemas operativos y hardware, asistiendo tanto a los equipos de trabajo como a los usuarios finales."
    },
    {
      titulo: "Educación",
      descripcion:"Técnica Laboral en Análisis y programación de computadores 2022-2024 Censa - Institución de Educación Técnica Laboral ",
      descripcion2:"Diplomado en desarrollo web 2021-2022 - Cedinsi Escuela Digital ",
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
  );
}

export default Perfil;
