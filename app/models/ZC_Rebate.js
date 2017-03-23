/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_Rebate', {
    RebateID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    OrderID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Amount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    OrderUserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    State: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'ZC_Rebate'
  });
};
