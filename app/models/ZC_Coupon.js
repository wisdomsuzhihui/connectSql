/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_Coupon', {
    CouponID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Amount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    ExpiringDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    UserRange: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    HasFinished: {
      type: "BIT",
      allowNull: false
    },
    Remark: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'ZC_Coupon'
  });
};
