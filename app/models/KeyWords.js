/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('KeyWords', {
    SID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    KewWord: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Grade: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'KeyWords'
  });
};
