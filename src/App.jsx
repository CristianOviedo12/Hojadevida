
import * as React from 'react';
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';

import './App.css';

const App = () => {
  return(
    <>
      <Container className='form-container'>
        <Box className='form-box'>
          <Typography>Registro de usuario</Typography>
        </Box>
        <form>
          <Grid className='form-grid'>
            <Grid>
              <TextField fullWidth id='username' label='nombre de usuario' variant='outlined'></TextField>
            </Grid>
            <Grid>
              <TextField fullWidth id='email' label='correo electronico' variant='outlined'></TextField>
            </Grid>
            <Grid>
              <Button type='submit' id='submit-btn' variant='outlined' fullWidth>
                Registrar
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  )
}

export default App;



