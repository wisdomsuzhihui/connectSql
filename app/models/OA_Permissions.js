/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OA_Permissions', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    MenuID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    AcsName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    px: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'OA_Permissions'
  });
};
