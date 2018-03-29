module.exports = function (sequelize, Sequelize) {
  var Post = sequelize.define("Post", {
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
    body: {
      type: Sequelize.TEXT,
      allowNull: false,
      len: [1]
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

  Post.associate = function (models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Post.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    Post.belongsTo(models.Thread, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Post;
};