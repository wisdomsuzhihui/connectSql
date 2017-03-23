/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProjectInvestor', {
    ProjectInvestorID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    InvestorName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ProjectID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Avatar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Amount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'ProjectInvestor'
  });
};
