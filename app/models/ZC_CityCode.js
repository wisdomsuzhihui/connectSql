/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_CityCode', {
    Code: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CityName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'ZC_CityCode'
  });
};
