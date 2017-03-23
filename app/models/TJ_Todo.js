/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TJ_Todo', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    WithdrawNum: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    RechargeNum: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    RebateNum: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PledgeNum: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    RepaymentNum: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    TransferNum: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    BalanceNum: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'TJ_Todo'
  });
};
