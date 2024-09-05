import * as React from 'react';
import { Box, Button, colors, Container, Grid, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import styles from './Registro.module.css'

const Registro = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [success, setSuccess] = React.useState('');
  const [error, setError] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar el formato del correo electrónico
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setError('Correo electrónico no válido');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/register', { email, password });
      setSuccess('Usuario registrado con éxito');
      setError('');
      setEmail('');
      setPassword('');
      setTimeout(() => {
        setSuccess('');
        navigate('/sesion'); // Redirige a la página de éxito
      }, 1250);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError(error.response.data.error);
      } else {
        setError('Ocurrió un error al registrar el usuario');
      }
    }
  };

  const handleClickPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    setError(''); // Limpia el mensaje de error al cambiar el correo
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    setError(''); // Limpia el mensaje de error al cambiar la contraseña
  };

  return (
    <Box className={styles.container} >
      <Box className={styles.box}>
        <Typography variant="h6" gutterBottom className={styles.typography} sx={{marginBottom:'25px'}}>
          Registro de usuario
        </Typography>
        <form onSubmit={handleSubmit} className={styles.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Correo electrónico"
                variant="outlined"
                value={email}
                onChange={handleChangeEmail}
                sx={{
                  marginBottom:'5px',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'white',
                    },
                    '& input': {
                      color: 'white', 
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 30, 0, 0.822)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'rgba(255, 30, 0, 0.822)', 
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'white', 
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: 'rgba(255, 30, 0, 0.822)',
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="password"
                name="password"
                label="Contraseña"
                type={showPassword ? 'text' : 'password'}
                variant="outlined"
                value={password}
                onChange={handleChangePassword}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff sx={{color:'white'}}/> : <Visibility sx={{color:'white'}}/>}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  marginBottom:'5px',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'white',
                    },
                    '& input': {
                      color: 'white', 
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 30, 0, 0.822)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'rgba(255, 30, 0, 0.822)', 
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'white', 
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: 'rgba(255, 30, 0, 0.822)',
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                id="submit-btn"
                variant="outlined"
                fullWidth
                sx={{
                  color: 'white', // Color inicial del texto
                  borderColor: 'white', // Borde inicial blanco
                  '&:hover': {
                      borderColor: 'rgba(255, 30, 0, 0.822)', // Borde rojo al pasar el cursor
                      color: 'rgba(255, 30, 0, 0.822)', // Texto rojo al pasar el cursor
                      transition: '1s', // Transición suave
                  },
              }}
                >
                  Registrar
              </Button>
              
            </Grid>
          </Grid>
        </form>
        {success && <Typography sx={{ fontWeight: 'bold', marginTop: '15px',color:'white' }} >{success}</Typography>}
        {error && <Typography sx={{ fontWeight: 'bold', marginTop: '10px',color:'red', fontSize:'10px' }}  >    e{!!error}
        {error}</Typography>}
      </Box>
    </Box>
  );
};

export default Registro;
