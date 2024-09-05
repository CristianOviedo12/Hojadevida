import { Box, Button, Container, Grid, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import React from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './Sesion.module.css';

const Iniciosesion = ({ setIsAuthenticated }) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3001/login', { email, password });
            setIsAuthenticated(true);
            localStorage.setItem('isAuthenticated', 'true');
            navigate('/secret');
        } catch (error) {
            if (error.response && error.response.status === 401) {
                setError('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
            } else {
                setError('Ocurrió un error al intentar iniciar sesión.');
            }
        }
    };

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Box className={styles.container} >
            <Box className={styles.box}>
                <Typography variant="h6" gutterBottom className={styles.typography} sx={{ marginBottom:'25px' }}>
                    Iniciar sesión
                </Typography>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField 
                                fullWidth
                                id="emailsesion"
                                name="emailsesion"
                                label="Correo electrónico"
                                variant="outlined"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} 
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
                                id="passwordsesion"
                                name="passwordsesion"
                                label="Contraseña"
                                variant="outlined"
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                InputProps={{
                                    endAdornment : (
                                        <InputAdornment position="end">
                                            <IconButton aria-label="toggle password visibility"
                                                onClick={handleClickPassword}
                                                edge="end" 
                                            >
                                                {showPassword ? <VisibilityOff sx={{color:'white'}} /> : <Visibility sx={{color:'white'}}/>}
                                            </IconButton>
                                        </InputAdornment>
                                    )
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
                                id="submit-button"
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
                                Ingresar
                            </Button>
                        </Grid>
                    </Grid>
                </form>
                {error && <Typography sx={{ fontWeight: 'bold', marginTop: '10px',color:'red', fontSize:'10px' }} >error={!!error}
                helperText={error}</Typography>}
            </Box>
        </Box>
    );
};

export default Iniciosesion;
