/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Tech_Video', {
    VideoID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Desc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PlayAddress: {
      type: DataTypes.STRING,
      allowNull: false
    },
    VideoCapture: {
      type: DataTypes.STRING,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    VideoGroupID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Sort: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'Tech_Video'
  });
};
