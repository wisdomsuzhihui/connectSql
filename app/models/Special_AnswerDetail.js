/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Special_AnswerDetail', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Flloor: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    SelectAnswer: {
      type: "NCHAR",
      allowNull: false
    },
    IsRight: {
      type: "BIT",
      allowNull: false
    }
  }, {
    tableName: 'Special_AnswerDetail'
  });
};
