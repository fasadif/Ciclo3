const router = require('express').Router();
// aqui se configuran los manejadores de cada ruta (articulos, servicios, categorias, usuariops, etc)
const apiRouterUser = require('./api/users.js');
// const apiRouterFilms = require('./api/films.js');
// const apiRouterServices = require('./api/services.js');

//manejador de rutas /api
router.use('/user', apiRouterUser); // ***.com/api/user
// router.use('/films', apiRouterFilms); // ***.com/api/films
// router.use('/servicios', apiRouterServices);  // ***.com/api/services


module.exports = router;