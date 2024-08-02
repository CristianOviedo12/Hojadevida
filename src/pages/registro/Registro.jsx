
import React from "react";
import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Registro = () => {
  
    const [username, setUserName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [success, setSuccess] = React.useState('');

    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await axios.post('http://localhost:3001/register', {username,email});
        setSuccess('Usuario registrado con éxito')
        setUserName('');
        setEmail('');
        setTimeout(()=>{
          setSuccess('');
          navigate('/')
        }, 1250);
      } catch (error) {
        console.log(error);
      }
      
    };
    return(
      <>
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
          <Typography variant="h6" gutterBottom sx={{ marginBottom:'20px'}}>
            Registro de usuario
          </Typography>
          <form onSubmit={handleSubmit}
            style={{
              width: '100%'
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="username"
                  name="username"
                  label="Nombre de usuario"
                  variant="outlined"
                  value={username}
                  onChange={(e)=>setUserName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  label="Correo electrónico"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  id="submit-btn"
                  variant="outlined"
                  fullWidth
                  sx={{color: 'black', borderColor:'black','&:hover':{color:'#1976d2',transition:'1s'}}}
                >
                  Registrar
                </Button>
              </Grid>
            </Grid>
          </form>
          {success && <Typography sx={{fontWeight:'bold', marginTop:'15px', textAlign:'center'}} >{success}</Typography>}
        </Box>
      </Container>
      </>
    )
}

export default Registro;