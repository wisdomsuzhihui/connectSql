/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TagCollection', {
    TagID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    TagName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    TagType: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'TagCollection'
  });
};
