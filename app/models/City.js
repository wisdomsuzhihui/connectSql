/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('City', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CityID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    FatherID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CityName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'City'
  });
};
