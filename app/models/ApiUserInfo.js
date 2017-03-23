/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ApiUserInfo', {
    ApiUserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UserName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    PassWord: {
      type: DataTypes.STRING,
      allowNull: false
    },
    PlatID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    State: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'ApiUserInfo'
  });
};
