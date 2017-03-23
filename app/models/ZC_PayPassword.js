/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_PayPassword', {
    PayPassworldID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Passworld: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'ZC_PayPassword'
  });
};
