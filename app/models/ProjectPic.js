/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProjectPic', {
    ProjectPicID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ProjectID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Pic: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'ProjectPic'
  });
};
