/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ForumModuleRelation', {
    ModuleRelationID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ProjectID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ForumICO: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'ForumModuleRelation'
  });
};
