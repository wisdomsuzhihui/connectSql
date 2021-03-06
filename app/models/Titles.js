/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Titles', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Remark: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'Titles'
  });
};
