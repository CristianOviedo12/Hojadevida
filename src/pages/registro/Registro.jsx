import * as React from 'react';
import { Box, Button, Container, Grid, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

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
        navigate('/success'); // Redirige a la página de éxito
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
    <Container
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Box
        sx={{
          width: '30%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '16px',
        }}
      >
        <Typography variant="h6" gutterBottom sx={{ marginBottom: '20px' }}>
          Registro de usuario
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Correo electrónico"
                variant="outlined"
                value={email}
                onChange={handleChangeEmail}
                error={!!error}
                helperText={error}
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
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                id="submit-btn"
                variant="outlined"
                fullWidth
                sx={{ color: 'black', borderColor: 'black', '&:hover': { color: '#1976d2', transition: '1s' } }}
              >
                Registrar
              </Button>
            </Grid>
          </Grid>
        </form>
        {success && <Typography sx={{ fontWeight: 'bold', marginTop: '15px' }}>{success}</Typography>}
      </Box>
    </Container>
  );
};

export default Registro;
