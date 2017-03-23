/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_OrderRechargeRelation', {
    OrdeRRID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    OrderID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    RechargeRecordID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'ZC_OrderRechargeRelation'
  });
};
