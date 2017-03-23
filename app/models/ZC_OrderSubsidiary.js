/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_OrderSubsidiary', {
    CouponOrderID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    OrderID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CouponID: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ManageCost: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'ZC_OrderSubsidiary'
  });
};
