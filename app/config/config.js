require("dotenv").config();
module.exports = {
 
    "development": {
 
        "username": "root",
 
        "password": "",
 
        "database": "sequelize_passport",
 
        "host": "127.0.0.1",
 
        "dialect": "mysql"

    },
 
    "test": {
 
        "username": "",
 
        "password": null,
 
        "database": "",
 
        "host": "",
 
        "dialect": "mysql"
 
    },
 
    "production": {
 
        "username": process.env.DB_USER,
 
        "password": process.env.DB_PASSWORD,
 
        "database": process.env.DB_DATABASE,
 
        "host": process.env.DB_HOST,
 
        "dialect": "mysql"
 
    }
 
};
