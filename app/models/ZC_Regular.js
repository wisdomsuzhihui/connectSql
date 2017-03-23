/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_Regular', {
    RegularID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    OrderID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Amount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Rate: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    StartDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    EndDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    IsBalance: {
      type: "BIT",
      allowNull: false
    },
    ProjectID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Profit: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'ZC_Regular'
  });
};
