/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RoleUsers', {
    RoleID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'RoleUsers'
  });
};
