/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CommentStar', {
    CommentStarID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CommentID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    StarType: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Star: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    tableName: 'CommentStar'
  });
};
