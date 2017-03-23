/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OA_User', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UserID: {
      type: DataTypes.STRING,
      allowNull: false
    },
    UserPassword: {
      type: DataTypes.STRING,
      allowNull: false
    },
    StaffID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CreateDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    LastLoginDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    RoleID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    OnLine: {
      type: "BIT",
      allowNull: false
    }
  }, {
    tableName: 'OA_User'
  });
};
