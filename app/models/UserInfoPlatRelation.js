/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UserInfoPlatRelation', {
    UserInfoPlatRelationID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PlatID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'UserInfoPlatRelation'
  });
};
