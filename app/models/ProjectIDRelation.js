/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProjectIDRelation', {
    RelationID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PlatProjectID: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ProjectID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PlatID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'ProjectIDRelation'
  });
};
