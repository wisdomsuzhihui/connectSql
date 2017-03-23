/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CollectionInfo', {
    CollectionID: {
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
      allowNull: false
    },
    Title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Remark: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'CollectionInfo'
  });
};
