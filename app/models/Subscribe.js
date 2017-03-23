/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Subscribe', {
    SubscribeID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'Subscribe'
  });
};
