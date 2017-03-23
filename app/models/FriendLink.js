/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FriendLink', {
    FID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    SiteLink: {
      type: DataTypes.STRING,
      allowNull: false
    },
    SiteName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Remark: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Sort: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Logo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Category: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    SiteType: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'FriendLink'
  });
};
