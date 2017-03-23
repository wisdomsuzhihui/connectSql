/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OA_SysMenu', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ModuleID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ParentID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    MenuName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Link: {
      type: DataTypes.STRING,
      allowNull: false
    },
    px: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'OA_SysMenu'
  });
};
