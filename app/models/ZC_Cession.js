/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_Cession', {
    CessionID: {
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
    Share: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    OriginalAmount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    TransferAmount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    EndDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    State: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CounterFee: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    OrderID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Reason: {
      type: DataTypes.STRING,
      allowNull: true
    },
    IsFirst: {
      type: "BIT",
      allowNull: false
    }
  }, {
    tableName: 'ZC_Cession'
  });
};
