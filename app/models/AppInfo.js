/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AppInfo', {
    AppInfoID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    AppInstalledInfo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    System: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Version: {
      type: DataTypes.STRING,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'AppInfo'
  });
};
