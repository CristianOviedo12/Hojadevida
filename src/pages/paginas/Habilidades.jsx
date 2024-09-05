import React from "react";
import { Button, Container,Box } from '@mui/material';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import FolderIcon from '@mui/icons-material/Folder';
import StyleIcon from '@mui/icons-material/Style';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import styles from './Habilidades.module.css';
import Humano3D from './Humano3D';

//  imágenes necesarias 0
import html from '../../assets/htmlimg.png';
import handlebarsjs from '../../assets/handlebarsjs.webp';
import github from '../../assets/GitHub.png';
import vsc from '../../assets/vsc.png';

// imagenes necesarias 1
import css from '../../assets/css.png';
import bootstrap from '../../assets/boots.png';
import mui from '../../assets/mui.png';

// imagenes necesarias 2
import javaScript from '../../assets/javascript.png';
import typeScript from '../../assets/TypesScript.png';
import php from '../../assets/php.png';
import react from '../../assets/react.svg';

// imagenes necesarias 2
import mysql from '../../assets/mysql.png';
import NavigationIcon from '@mui/icons-material/Navigation';

// Define los datos para cada índice
const initialData = [
  {
    img: html,
    h1: "HTML: HyperText Markup Language",
    p: "HTML stands for HyperText Markup Language."
  },
  {
    img: handlebarsjs,
    h1: "Handlebars.js: Motor de Plantillas",
    p: "Handlebars.js es un motor de plantillas popular que ayuda a generar HTML de manera dinámica."
  },
  {
    img: github,
    h1: "GitHub: Plataforma de Control de Versiones",
    p: "GitHub es una plataforma de desarrollo colaborativo basada en Git que permite gestionar el control de versiones de código fuente."
  },
  {
    img: vsc,
    h1: "Visual Studio Code: Editor de Código",
    p: "Visual Studio Code (VS Code) es un editor de código fuente ligero y potente desarrollado por Microsoft."
  }
];

const clickData = [
  {
    img: css,
    h1: "CSS: Cascading Style Sheets",
    p: "CSS controla el estilo y la apariencia de las páginas web, incluyendo colores, fuentes, márgenes, espaciado, etc."
  },
  {
    img: bootstrap,
    h1: "Bootstrap: Framework de Diseño Front-End",
    p: "Bootstrap es un framework de diseño front-end de código abierto que facilita el desarrollo de aplicaciones web responsivas y móviles."
  },
  {
    img: mui,
    h1: "Material-UI (MUI): Biblioteca de Componentes React",
    p: "Material-UI (MUI) es una biblioteca de componentes para React basada en Material Design, que ofrece componentes reutilizables y estilos predefinidos."
  }
];

const clickLenguajes = [
  {
    img: javaScript,
    h1: "JavaScript: Lenguaje de Programación",
    p: "JavaScript es un lenguaje de programación para crear interactividad en páginas web."
  },
  {
    img:typeScript,
    h1:"TypeScript: Superset de JavaScript",
    p:"TypeScript es un superset de JavaScript que añade tipado estático y características avanzadas para mejorar el desarrollo."
  },
  {
    img:php,
    h1:"PHP: Lenguaje de Script del Lado del Servidor",
    p:"PHP es un lenguaje de scripting del lado del servidor utilizado para desarrollar aplicaciones web dinámicas y gestionar bases de datos."
  },
  {
    img:react,
    h1:"React: Biblioteca para Interfaces de Usuario",
    p:"React es una biblioteca para construir interfaces de usuario interactivas con componentes reutilizables."
  }
]

const clickDatos = [
  {
    img:mysql,
    h1:"MySQL: Sistema de Gestión de Bases de Datos",
    p:"MySQL es un sistema de gestión de bases de datos relacional de código abierto utilizado para almacenar y gestionar datos."
  }
]

const Habilidades = ({ onBack }) => {
  const [activeIndex, setActiveIndex] = React.useState(null);
  const [dataToShow, setDataToShow] = React.useState(initialData);

  const handleActive = (index) => {
    setActiveIndex(index);
    // Si se hace clic en el índice 1, actualiza los datos para mostrar clickData
    if (index === 1) {
      setDataToShow(clickData);
    } else {
      if(index === 2) {
        setDataToShow(clickLenguajes);
      } else {
        if (index === 3) {
          setDataToShow(clickDatos);
        }else{
          // De lo contrario, muestra el conjunto de datos inicial
          setDataToShow(initialData);
        }
    }
  }
  };

  return (
    <Box className={styles.cajaMayor}>

      <Box className={styles.menu}>
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
          <Button className={styles.menubtn} sx={{ mr: 1, color:'white' }} startIcon={<NavigationIcon className={styles.menubtnicon}/>}  onClick={onBack}>Regresar</Button>
        </Box>
      </Box>

      <Box className={styles.cajaContenido}>

          <Box className={styles.cajaOne}>
            <div className={styles.container}>
            <section className={styles.sectioncontainer}>
            <section 
              className={`${styles.sectionHabilidades} ${activeIndex === 0 ? styles.active : ''}`}
              onClick={() => handleActive(0)}
            >
              <div className={styles.div1}><p>|1|</p></div>
              <div className={styles.div2}><p>MAQUETACIÓN</p></div>
              <div className={styles.div3}><ViewQuiltIcon className={styles.icon} /></div>
            </section>
          </section>
          <section className={styles.sectioncontainer}>
            <section
              className={`${styles.sectionHabilidades} ${activeIndex === 1 ? styles.active : ''}`}
              onClick={() => handleActive(1)}
            >
              <div className={styles.div1}><p>|2|</p></div>
              <div className={styles.div2}><p>ESTILOS</p></div>
              <div className={styles.div3}><StyleIcon className={styles.icon} /></div>
            </section>
          </section>
          <section className={styles.sectioncontainer}>
            <section
              className={`${styles.sectionHabilidades} ${activeIndex === 2 ? styles.active : ''}`}
              onClick={() => handleActive(2)}
            >
              <div className={styles.div1}><p>|3|</p></div>
              <div className={styles.div2}><p>PROGRAMACIÓN</p></div>
              <div className={styles.div3}><DeveloperBoardIcon className={styles.icon} /></div>
            </section>
          </section>
          <section className={styles.sectioncontainer}>
            <section
              className={`${styles.sectionHabilidades} ${activeIndex === 3 ? styles.active : ''}`}
              onClick={() => handleActive(3)}
            >
              <div className={styles.div1}><p>|4|</p></div>
              <div className={styles.div2}><p>DATOS</p></div>
              <div className={styles.div3}><FolderIcon className={styles.icon} /></div>
            </section>
          </section>

            </div>
          </Box>

        
          <Box className={styles.cajaTwo}>
            <div className={styles.containertwo}>
              <Humano3D />
            </div>

            <div className={styles.containertree}>
              <section className={styles.info}>
              {dataToShow.map((item, index) => (
                <div className={styles.divssection} key={index}>
                  <div className={styles.imgdiv}>
                   <img src={item.img} alt={`Description ${index}`} />
                  </div>
                  <div className={styles.infodiv}>
                    <h1>{item.h1}</h1>
                    <p>{item.p}</p>
                  </div>
                </div>
              ))}
              </section>
            </div>
          </Box>
        
      </Box>

    </Box>
  );
}

export default Habilidades;
