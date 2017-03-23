/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AccountBook', {
    AccountBookID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PlatID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PlatName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ProjectID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Pic: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ProjectName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Amount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    Proportion: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    PostValuation: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    Type: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'AccountBook'
  });
};
