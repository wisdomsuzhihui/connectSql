/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SpaceVisitLog', {
    SpaceVisitLogID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ByUserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'SpaceVisitLog'
  });
};
