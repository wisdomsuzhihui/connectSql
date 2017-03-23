/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_GuardTips', {
    GuardTipsID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Profit: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    InterestRate: {
      type: DataTypes.STRING,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'ZC_GuardTips'
  });
};
