/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TJ_Summary', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    RegNum: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    AuthNum: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ProjectNum: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Amount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    PalteAmount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'TJ_Summary'
  });
};
