/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Open_Account', {
    AccountID: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    PlatID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    SecretKey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CallbackAddress1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CallbackAddress2: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'Open_Account'
  });
};
