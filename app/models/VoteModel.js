/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VoteModel', {
    VoteModelID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ModelName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Remark: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'VoteModel'
  });
};
