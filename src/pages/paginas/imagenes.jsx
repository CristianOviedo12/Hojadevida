import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';

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


export default function imagenes() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>

      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: react,
    title: 'React',
    author: '@reactjs',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: javaScript,
    title: 'JavaScript',
    author: '@JavaScriptDaily',
  },
  {
    img: typeScript,
    title: 'TypesScript',
    author: '@typescript',
  },
  {
    img: php,
    title: 'PHP',
    author: '@official_php',
    cols: 2,
  },
  {
    img: mysql,
    title: 'Hats',
    author: '@MySQL',
    cols: 2,
  },
  {
    img: mui,
    title: 'Honey',
    author: '@MUI_hq',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: bootstrap,
    title: 'Basketball',
    author: '@getbootstrap',
  },
  {
    img: css,
    title: 'Fern',
    author: '@css',
  },
  {
    img:html,
    title: 'Mushrooms',
    author: '@html',
    rows: 2,
    cols: 2,
  },
  {
    img: handlebarsjs,
    title: 'Tomato basil',
    author: '@handlebarsjs',
  },
  {
    img: github,
    title: 'Sea star',
    author: '@github',
  },
  {
    img: vsc,
    title: 'Bike',
    author: '@code',
    cols: 2,
  },
];
