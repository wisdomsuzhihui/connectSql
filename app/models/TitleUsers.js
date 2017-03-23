/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TitleUsers', {
    TitleID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'TitleUsers'
  });
};
