/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MessageReadRecord', {
    ReadRecordID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    MessageID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'MessageReadRecord'
  });
};
