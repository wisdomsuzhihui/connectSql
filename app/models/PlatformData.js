/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PlatformData', {
    PlatformDataID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PlatID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    TotalVolume: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    InvestmentNum: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TransactionCycle: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Valuation: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    TransactionNum: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CompleteRate: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ProjectNum: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'PlatformData'
  });
};
