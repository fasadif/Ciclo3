const express = require('express');
// Instancia de Express en mi App
const app = express();

//const apiRoutes = require('./routes');

// Middleware Morgan para detectar peticiones
const morgan = require('morgan');
app.use(morgan('dev'));

//Levantar el servidor
const port = 3000;
//app.set('PORT', 3000);
app.listen(port, ()=>{
    console.log('server UP');
});

// Recibir peticiones en formato JSON
app.use(express.json());



// Definir ruta de imagenes
app.use(express.static('@assets'));

// Primera Ruta
app.get(
    '/', 
    function(req, res){
        res.send('Hello World in Root')
    }
);

//ruta de solo ADministradores
app.get('/admin', function(req, res){
    res.send('Bienvenido al entorno de Administracion')
});

app.get('*', function(req, res){
    res.status(404).send('PAGINA NO ENCONTRADA')
});

app.post('/', function(req, res){
    res.send('Got a POST request')
});

app.put('/user', function(req, res){
    res.send('Got a PUT request at /user')
});

app.delete('/user', function(req, res){
    res.send('Got a DELETE request at /user')
});
