/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SendEmail', {
    SendID: {
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
    },
    Receiver: {
      type: DataTypes.STRING,
      allowNull: false
    },
    SendDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    IsSend: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    FailEmailMessage: {
      type: DataTypes.STRING,
      allowNull: true
    },
    AttachURL: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'SendEmail'
  });
};
