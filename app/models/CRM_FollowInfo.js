/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CRM_FollowInfo', {
    FollowInfoID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    FollowUserID: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'CRM_FollowInfo'
  });
};
