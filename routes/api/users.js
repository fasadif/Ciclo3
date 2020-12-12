const router = require('express').Router();
const userController = require('../../controllers/UserControler');

router.get('/listar', userController.listar); // .com/api/user/listar
// router.post('register', UserController.register);
router.post('/login', userController.login); // ruta: ***.com/api/user/login

module.exports = router;