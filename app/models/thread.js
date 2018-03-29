module.exports = function (sequelize, Sequelize) {
  var Thread = sequelize.define("Thread", {
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
    
    Thread.associate = function(models) {
      Thread.hasMany(models.Post, {
        onDelete: "cascade"
      });
    };
    Thread.associate = function(models) {
      Thread.belongsTo(models.Forum, {
        foreignKey: {
          allowNull: false
        }
      });
    };

  return Thread;
};
