//1. se crea los modelos
const { Sequelize, DataTypes } = require('sequelize');
const UserModel = require('./users')

// conexion a la DB (DB, user, pass)
const sequelize = new Sequelize('bpEJizof7o', 'bpEJizof7o', 'C6P9AvwtQi', {
    host: 'remotemysql.com',
    port: '3306',
    dialect: 'mysql'/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  });

// 2. se crea la instancia del modelo
const User = UserModel(sequelize, Sequelize);

// 3. se sincroniza con la DB
sequelize.sync({ force: false})
    .then( () => {
        console.log('tablas sincronizadas')
    });

    module.exports= {
        User
    }

