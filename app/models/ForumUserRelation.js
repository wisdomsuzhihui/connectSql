/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ForumUserRelation', {
    ForumUserRelationID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ForumUserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'ForumUserRelation'
  });
};
