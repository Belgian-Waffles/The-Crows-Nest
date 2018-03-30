module.exports = function (sequelize, Sequelize) {

    var User = sequelize.define('User', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        username: {
            type: Sequelize.TEXT
        },

        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        },

        password: {
            type: Sequelize.STRING,
            allowNull: false
        },

        status: {
            type: Sequelize.ENUM('active', 'inactive'),
            defaultValue: 'active'
        },
        city: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        state: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        'createdAt': {
            type: Sequelize.DATE(3),
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
        },
        'updatedAt': {
            type: Sequelize.DATE(3),
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
        },
    },
    {
        timestamps: true,
    });

    // User.associate = function(models) {
    //     User.belongsTo(models.Community, {
    //       foreignKey: {
    //         allowNull: true
    //       }
    //     });
    //   };
    return User;
}