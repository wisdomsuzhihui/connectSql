/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VoteAnswer', {
    AnswerID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    QuestionID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Content: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'VoteAnswer'
  });
};
