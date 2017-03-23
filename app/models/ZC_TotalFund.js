/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_TotalFund', {
    TotalFundID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    TradeType: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ToType: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'ZC_TotalFund'
  });
};
