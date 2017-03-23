/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UserDynamic', {
    DynamicID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Object: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ObjectID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ShortDesc: {
      type: DataTypes.STRING,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'UserDynamic'
  });
};
