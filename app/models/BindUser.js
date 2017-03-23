/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('BindUser', {
    BindID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    OpenID: {
      type: DataTypes.STRING,
      allowNull: false
    },
    IsOldUser: {
      type: "BIT",
      allowNull: false
    },
    BindType: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'BindUser'
  });
};
