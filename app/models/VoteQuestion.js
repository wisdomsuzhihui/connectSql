/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VoteQuestion', {
    QuestionID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    VoteModelID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    SelectType: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'VoteQuestion'
  });
};
