/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProjectComment', {
    ProjectCommentID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ProjectID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UserName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'ProjectComment'
  });
};
