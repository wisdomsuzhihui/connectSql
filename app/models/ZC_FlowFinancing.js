/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_FlowFinancing', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    FinancingName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    RateType: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Type: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    InterestWay: {
      type: DataTypes.STRING,
      allowNull: true
    },
    LowAmount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    PurchAmount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    BuyMaxAmount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    CurrentAmount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    Amount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    StartTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    EndTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    IsAuto: {
      type: "BIT",
      allowNull: false
    },
    Moderator: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ModerDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Created: {
      type: DataTypes.STRING,
      allowNull: false
    },
    State: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'ZC_FlowFinancing'
  });
};
