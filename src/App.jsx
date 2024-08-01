import * as React from 'react';
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';

const App = () => {
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
        <Typography variant="h6" gutterBottom sx={{ marginBottom:'20px'}}>
          Registro de usuario
        </Typography>
        <form
          sx={{
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
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Correo electrónico"
                variant="outlined"
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
      </Box>
    </Container>
  );
}

export default App;




