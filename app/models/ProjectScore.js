/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProjectScore', {
    ProjectScoreID: {
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
    ScoreType: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Score: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'ProjectScore'
  });
};
