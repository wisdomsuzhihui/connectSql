/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ChouJiang', {
    ChouJiangID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    JiangPin: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    State: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'ChouJiang'
  });
};
