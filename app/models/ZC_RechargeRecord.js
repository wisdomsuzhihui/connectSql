/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_RechargeRecord', {
    RechargeRecordID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Amount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    AssociatedBank: {
      type: DataTypes.STRING,
      allowNull: false
    },
    State: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Remark: {
      type: DataTypes.STRING,
      allowNull: true
    },
    IsCheck: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Attachment: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'ZC_RechargeRecord'
  });
};
