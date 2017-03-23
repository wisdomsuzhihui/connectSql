/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_ProjectFile', {
    FileID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ProjectID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    FileName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'ZC_ProjectFile'
  });
};
