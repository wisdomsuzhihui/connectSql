/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_LineRecharge', {
    LineRechargeID: {
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
    Remark: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Audit: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Attachment: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'ZC_LineRecharge'
  });
};
