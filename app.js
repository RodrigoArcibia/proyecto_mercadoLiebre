const express = require('express');

const app = express();

const path = require('path');

const publicPath = path.join(__dirname, './public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get('/home', (req, res) =>{
    res.sendFile(__dirname + '/views/index.html');
});
app.get('/registro', (req, res) =>{
    res.sendFile(__dirname + '/views/register.html');
});
app.get('/loguin', (req, res) =>{
    res.sendFile(__dirname + '/views/loguin.html');
});

app.listen(port, () => console.log(`Conexion Exitosa ${ port }!`));