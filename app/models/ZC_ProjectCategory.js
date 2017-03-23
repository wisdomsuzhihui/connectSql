/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_ProjectCategory', {
    ProjectCategoryID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ParentID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CategoryName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Sort: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'ZC_ProjectCategory'
  });
};
