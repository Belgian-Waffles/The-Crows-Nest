//encrypts password
var bcrypt = require('bcrypt-nodejs')

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('User', {
        city: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
    });
    User.associate = function (models) {
        User.hasMany(model.Post, {
            onDelete: "cascade"
        });
        User.hasMany(model.Thread, {
            onDelete: "cascade"
        });
    };
    return User
};