module.exports = function(sequelize, DataTypes) {
    var Forum = sequelize.define("Forum", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
    });
    Forum.associate = function(models) {
      Forum.hasMany(models.Thread,{
        onDelete: "cascade"
      });
      Forum.belongsTo(models.Community,{
        foreignKey: {
            allowNull: false
          }
      });
    };
    
    return Forum;
  };
  