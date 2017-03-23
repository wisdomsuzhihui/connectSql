/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MsgSendRecords', {
    SendRecordID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    MessageID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    SendUserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ReceiveUserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'MsgSendRecords'
  });
};
