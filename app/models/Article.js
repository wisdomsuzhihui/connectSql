/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Article', {
    ArticleID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'Article'
  });
};
