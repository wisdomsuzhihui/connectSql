/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Tech_CourseNewsRelation', {
    RelationID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    NewsID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CourseID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Sort: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'Tech_CourseNewsRelation'
  });
};
