/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RolePowers', {
    RoleID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PowerID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'RolePowers'
  });
};
