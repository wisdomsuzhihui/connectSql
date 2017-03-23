/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MessageSendRecord', {
    SendRecordID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Content: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Result: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'MessageSendRecord'
  });
};
