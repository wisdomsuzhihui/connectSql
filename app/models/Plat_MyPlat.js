/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Plat_MyPlat', {
    MyPlatID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PlatName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'Plat_MyPlat'
  });
};
