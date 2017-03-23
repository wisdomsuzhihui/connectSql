/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProjectMoreInfo', {
    ProjectMoreInfoID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ProjectID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ShortDesc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Threshold: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Area: {
      type: DataTypes.STRING,
      allowNull: true
    },
    LastUpdate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Team_Score: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    Idea_Score: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    Market_Score: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    Profit_Score: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    Compete_Score: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    Total_Score: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    Suggestion: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'ProjectMoreInfo'
  });
};
