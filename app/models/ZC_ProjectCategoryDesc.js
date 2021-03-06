/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_ProjectCategoryDesc', {
    PCID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'ZC_ProjectCategoryDesc'
  });
};
