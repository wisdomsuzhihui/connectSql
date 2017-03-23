/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProjectAttribute', {
    ProjectAttributeID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ProjectID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ProjectCategoryID: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'ProjectAttribute'
  });
};
