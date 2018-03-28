module.exports = function(sequelize, DataTypes) {
    var Community = sequelize.define("Community", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
    });
    Community.associate = function(models) {
      Community.hasMany(models.User,{
        foreignKey: {
            allowNull: false
          }
      });
      Community.belongsTo(models.User,{
        foreignKey: {
            allowNull: false
          }
      });
      Community.hasOne(models.Forum,{
        onDelete: "cascade"
      })
    };
    
    return Community;
  };
  