module.exports = function (sequelize, Sequelize) {
  var Community = sequelize.define("Community", {
    title: {
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
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)'),
    },
  },
    {
      timestamps: true,
    });
  Community.associate = function (models) {
    Community.hasMany(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    Community.belongsTo(models.User, {
      as: "Owner",
      constraints: false,
    });
    Community.hasOne(models.Forum, {
      onDelete: "cascade"
    })
  };

  return Community;
};
