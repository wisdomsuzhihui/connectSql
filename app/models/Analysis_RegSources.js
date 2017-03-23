/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Analysis_RegSources', {
    RegSourcesID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    SourceUrl: {
      type: DataTypes.STRING,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'Analysis_RegSources'
  });
};
