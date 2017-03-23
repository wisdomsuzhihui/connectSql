/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CrawlerNewsRelation', {
    CrawlerRelationID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    NewsID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CrawlerNewsID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'CrawlerNewsRelation'
  });
};
