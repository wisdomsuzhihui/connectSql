/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PlatLoginRelation', {
    RelationID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PlatID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PlatUserID: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'PlatLoginRelation'
  });
};
