// const { type } = require("os");
const { Sequelize } = require("sequelize");

module.exports = (sequelize, type) =>{
    return sequelize.define('users', {
        // Model attributes are defined here
        id: {
            type: type.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        username: type.STRING,
        email: type.STRING,
        password: type.STRING,
        rol: type.STRING
          // allowNull defaults to true
    });
}