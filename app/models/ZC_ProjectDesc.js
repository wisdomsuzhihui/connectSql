/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_ProjectDesc', {
    ProjectDescID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ProjectID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PCID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    TitleHide: {
      type: "BIT",
      allowNull: false
    },
    Title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Desc: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Sort: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'ZC_ProjectDesc'
  });
};
