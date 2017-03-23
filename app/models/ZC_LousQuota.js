/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_LousQuota', {
    LousQuotaID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ProjectID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Quota: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    AvailableCredit: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    tableName: 'ZC_LousQuota'
  });
};
