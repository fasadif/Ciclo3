const express = require('express');
const app = express(); // Instancia de Express en mi App
const apiRouter = require('./routes'); //ruta para la API
const cors = require('cors');

app.use(cors());

// body parser para manejo de los JSON
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware Morgan para detectar peticiones
const morgan = require('morgan');
app.use(morgan('dev'));

//Levantar el servidor
app.set('PORT', process.env.PORT || 3000); //asi se pueen defiir variables para la app unicamente
app.listen(app.get('PORT'), ()=>{
    console.log('server UP');
});

// Recibir peticiones en formato JSON
app.use(express.json());

// Definir ruta de imagenes
app.use(express.static('@assets'));

// API Ruta
app.use('/api', apiRouter);

// Primera Ruta
app.get(
    '/', 
    function(req, res){
        res.send('Hello World in Root')
    }
);


// //ruta de solo ADministradores
// app.get('/admin', function(req, res){
//     res.send('Bienvenido al entorno de Administracion')
// });

// app.get('*', function(req, res){
//     res.status(404).send('PAGINA NO ENCONTRADA')
// });

// app.post('/', function(req, res){
//     res.send('Got a POST request')
// });

// app.put('/user', function(req, res){
//     res.send('Got a PUT request at /user')
// });

// app.delete('/user', function(req, res){
//     res.send('Got a DELETE request at /user')
// });


// http://www.youtube.com/watch?v=qsE8Br-jt_8