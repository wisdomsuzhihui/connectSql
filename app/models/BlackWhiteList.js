/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('BlackWhiteList', {
    BlackWhiteID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    IP: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'BlackWhiteList'
  });
};
