/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_Order', {
    OrderID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ProjectID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Amount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    ContractStatus: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    AgreementUrl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PayStatus: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    IsSuccess: {
      type: "BIT",
      allowNull: false
    },
    IsBalance: {
      type: "BIT",
      allowNull: false
    },
    OrderType: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PayAmount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    CouponAmount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    Number: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PcUrl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    MobileUrl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PayDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Remark: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PaymentMethod: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Term: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'ZC_Order'
  });
};
