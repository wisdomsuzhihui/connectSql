/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Help', {
    HelpID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CategoryID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Content: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'Help'
  });
};
