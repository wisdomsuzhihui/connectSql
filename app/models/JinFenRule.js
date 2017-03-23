/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('JinFenRule', {
    RulesID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    RulesTitle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    JinFen: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    Frequency: {
      type: DataTypes.STRING,
      allowNull: false
    },
    FrequencyNum: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'JinFenRule'
  });
};
