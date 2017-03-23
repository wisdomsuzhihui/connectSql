/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CrawlRelations', {
    CrawlRelationsID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ObjectID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CrawlUrl: {
      type: DataTypes.STRING,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    ObjectType: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'CrawlRelations'
  });
};
