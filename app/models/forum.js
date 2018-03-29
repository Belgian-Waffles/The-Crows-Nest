module.exports = function (sequelize, Sequelize) {
  var Forum = sequelize.define("Forum", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
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
  Forum.associate = function (models) {
    Forum.hasMany(models.Thread, {
      onDelete: "cascade"
    });
    Forum.belongsTo(models.Community, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Forum;
};
