/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('BrowseLog', {
    BrowseLogID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ObjectType: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Views: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    LastPostDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'BrowseLog'
  });
};
