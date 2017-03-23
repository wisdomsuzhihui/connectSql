/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_FlowFinancingRecordProject', {
    FFRPID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    FlowFinancingRecordID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    OrderID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ProjectID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'ZC_FlowFinancingRecordProject'
  });
};
