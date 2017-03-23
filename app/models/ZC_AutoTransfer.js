/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_AutoTransfer', {
    AutoTransferID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Balance: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'ZC_AutoTransfer'
  });
};
