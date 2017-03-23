/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Notice', {
    NoticeID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Title: {
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
    },
    Site: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'Notice'
  });
};
