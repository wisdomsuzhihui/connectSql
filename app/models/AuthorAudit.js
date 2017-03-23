/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AuthorAudit', {
    AuthorAuditID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Account: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Avatar: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Remark: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IsAudit: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Reason: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'AuthorAudit'
  });
};
