/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Project', {
    ProjectID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ProjectName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CurrentAmount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    TargetAmount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    OutStock: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Support: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EndTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TargetDay: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ProjectSponsor: {
      type: DataTypes.STRING,
      allowNull: true
    },
    State: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    IsTop: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    IsDel: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    StartAmount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    Total_Score: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    Area: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ViewCount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    IsAduit: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'Project'
  });
};
