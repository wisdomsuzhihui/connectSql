/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_CallbackLog', {
    CallbackLogID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    OrderID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Result: {
      type: DataTypes.STRING,
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
    tableName: 'ZC_CallbackLog'
  });
};
