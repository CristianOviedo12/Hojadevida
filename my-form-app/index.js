
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// conectamos a la base de datos MySQL

const bd = mysql.createConnection({
   host: 'localhost', user: 'root', password: 'cfbok12!!', database: 'mydatabase' 
});

bd.connect((err)=>{
    if (err) throw err;
    console.log('Conectado a la base de datos MySQL');
});

//Ruta para manejar el envio del formulario

app.post('/register',(req, res) => {
    const { username,email } = req.body;
    const sql = 'INSERT INTO users (username,email) VALUES(?,?)';
    bd.query(sql, [username,email], (err, result) => {
        if(err) throw err;
        res.send('usuario registrado');
    });
}); 

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});