/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VoteResult', {
    VoteResultID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    QuestionID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    AnswerID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Content: {
      type: DataTypes.STRING,
      allowNull: true
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ClientIP: {
      type: DataTypes.STRING,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'VoteResult'
  });
};
