/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SiteMapXml', {
    SitemapID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Object: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ObjectID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'SiteMapXml'
  });
};
