/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_FlowFinancingRecord', {
    FlowFinancingRecordID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    FundType: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    TransactionAmount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    AvailableBalance: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    Remark: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    State: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ObjectID: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'ZC_FlowFinancingRecord'
  });
};
