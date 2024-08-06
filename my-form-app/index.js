const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// Conectamos a la base de datos MySQL
const bd = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'cfbok12!!',
  database: 'mydatabase'
});

bd.connect((err) => {
  if (err) throw err;
  console.log('Conectado a la base de datos MySQL');
});

// Ruta para manejar el envío del formulario
app.post('/register', (req, res) => {
  const { email, password } = req.body;

  // Verificar si el correo ya está registrado
  const checkEmail = 'SELECT * FROM users WHERE email = ?';

  bd.query(checkEmail, [email], (err, result) => {
    if (err) {
      console.error('Error al verificar el correo:', err);
      return res.status(500).send('Error en el servidor');
    }
    if (result.length > 0) {
      return res.status(400).json({ error: 'El correo ya está registrado' });
    }

    // Insertar si no está registrado
    const insertUser = 'INSERT INTO users(email, password) VALUES(?, ?)';
    bd.query(insertUser, [email, password], (err, result) => {
      if (err) {
        console.error('Error al insertar usuario:', err);
        return res.status(500).send('Error en el servidor');
      }
      res.send('Usuario registrado con éxito');
    });
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
