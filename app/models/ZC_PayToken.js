/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_PayToken', {
    PayTokenID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    FullName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    IDNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CardNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Token: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'ZC_PayToken'
  });
};
