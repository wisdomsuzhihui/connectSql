/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Analysis_Investigate', {
    InvestigateID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Industry: {
      type: DataTypes.STRING,
      allowNull: false
    },
    InvestmentCases: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Suggestions: {
      type: DataTypes.STRING,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'Analysis_Investigate'
  });
};
