/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_ProjectQA', {
    ProjectQAID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ProjectID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ParentID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Content: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    IsReply: {
      type: "BIT",
      allowNull: false
    }
  }, {
    tableName: 'ZC_ProjectQA'
  });
};
