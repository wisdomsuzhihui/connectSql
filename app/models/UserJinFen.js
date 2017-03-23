/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UserJinFen', {
    UserJinFenID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    RulesID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    JinFen: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'UserJinFen'
  });
};
