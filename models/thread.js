module.exports = function(sequelize, DataTypes) {
    var Thread = sequelize.define("Thread", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
    });
    Thread.associate = function(models) {
      // We're saying that a Thread should belong to an Author
      // A Thread can't be created without an Author due to the foreign key constraint
      Thread.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
      Thread.belongsTo(models.Forum, {
        foreignKey: {
          allowNull: false
        }
      });
      Thread.hasMany(models.Post,{
        onDelete: "cascade"
      });
    };
    
    return Thread;
  };
  