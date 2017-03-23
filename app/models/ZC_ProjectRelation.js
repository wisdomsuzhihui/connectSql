/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_ProjectRelation', {
    ProjectRelationID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ZCProjectID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ProjectID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'ZC_ProjectRelation'
  });
};
