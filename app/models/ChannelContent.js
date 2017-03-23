/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ChannelContent', {
    ChannelContentID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ChannelCode: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Object: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ObjectID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Title: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Remark: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Pic: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Link: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Sort: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ClickTimes: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'ChannelContent'
  });
};
