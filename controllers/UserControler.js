const models = require('../models');

// const { user /* articulos, servivios, etc*/ } = require('../../controllers/UserControler.js');
// const { User } = require('../../models');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

exports.login = async (req, res, next) =>{
    try {
        const user = await models.User.findOne({where: {email: req.body.email}})
        if (user){
            const pass = bcrypt.compareSync(req.body.password, user.password)
            if (pass){
                const token = jwt.sign({
                    id: user.id,
                    name: user.username,
                    email: user.email,
                    rol: user.rol
                    },
                    'config.secret',
                    { expiresIn: 86400, })// expires in 24 hours
                res.status(200).send({ 
                    auth: true,
                    tokenReturn: token,
                    user: user
                })
            }
            else{
                res.status(401).json({ 
                    error: 'Error en la contraseña'
                })
            }
        }
        else{
            res.status(404).json({ 
                error: 'Error en el usuario'
            })
        }
    } catch (error) {
        
    }
};

exports.register = async(req, res, next) =>{
    try {
        
    } catch (error) {
        
    }
}

exports.listar = async(req, res, next) =>{
    try {
        const users = await models.User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).send({message: 'error !!!'});
        next(error);
    }
}
// //LOGIN - la raiz seria: ***.com/api/user/   y aqui nos traemos el listado de users de la DB
// router.get('/', async(req, res) =>{
//     const user = await User.findAll();
//     res.status(200).json(user);
// });

// // REGISTER: ***.com//api/user/register y este metodo permite REGISTRAR USUARIOS
// router.post('/register', async(req, res)=>{
//     req.body.password = await bcrypt.hashSync(req.body.password, 10);
//     const user = await User.create(req.body);
//     response.status(200).json(user);
// });