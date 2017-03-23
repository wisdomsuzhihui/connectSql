/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Special_RecommendedLinks', {
    LinksID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ShortUrl: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Type: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'Special_RecommendedLinks'
  });
};
