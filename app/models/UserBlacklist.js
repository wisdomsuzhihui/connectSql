/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UserBlacklist', {
    BlacklistID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Reason: {
      type: DataTypes.STRING,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'UserBlacklist'
  });
};