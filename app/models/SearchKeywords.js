/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SearchKeywords', {
    KeywordID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Keywords: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Frequency: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'SearchKeywords'
  });
};
