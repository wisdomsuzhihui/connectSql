/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_GDRebateAccount', {
    GDRebateAccountID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    AvailableBalance: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    tableName: 'ZC_GDRebateAccount'
  });
};
