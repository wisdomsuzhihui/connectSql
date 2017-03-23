/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Special_Answerlist', {
    AnswerlistID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    StartTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    EndTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    RightNum: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    TimeFormat: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Rate: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    tableName: 'Special_Answerlist'
  });
};
