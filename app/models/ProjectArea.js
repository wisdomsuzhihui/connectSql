/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProjectArea', {
    ProjectAreaID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ParentID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    AreaLevel: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CityName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'ProjectArea'
  });
};
