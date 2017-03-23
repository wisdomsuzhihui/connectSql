/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Option', {
    OptionID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    OptionCategoryID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    OptionName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Other: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'Option'
  });
};
