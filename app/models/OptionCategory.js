/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OptionCategory', {
    OptionCategoryID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CategoryName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'OptionCategory'
  });
};
