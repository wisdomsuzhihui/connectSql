/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CommentCredit', {
    CreditID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CommentID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    IpAddress: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Support: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Opposition: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'CommentCredit'
  });
};
