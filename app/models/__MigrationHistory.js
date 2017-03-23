/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('__MigrationHistory', {
    MigrationId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ContextKey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Model: {
      type: "VARBINARY",
      allowNull: false
    },
    ProductVersion: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: '__MigrationHistory'
  });
};
