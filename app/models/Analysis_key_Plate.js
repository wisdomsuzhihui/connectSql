/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Analysis_key_Plate', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    KeyID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PlatID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'Analysis_key_Plate'
  });
};
