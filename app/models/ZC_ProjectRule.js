/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_ProjectRule', {
    ProjectRuleID: {
      type: DataTypes.INTEGER,
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
    ManagerFee: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    OtherFee: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    tableName: 'ZC_ProjectRule'
  });
};
