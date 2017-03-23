/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_UserCoupon', {
    UserCouponID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CouponID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    IsUsed: {
      type: "BIT",
      allowNull: false
    },
    UseDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ReceiveDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'ZC_UserCoupon'
  });
};
