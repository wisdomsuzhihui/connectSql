/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_SignatureLog', {
    SignatureLogID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    OrderID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ProjectID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Remark: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'ZC_SignatureLog'
  });
};
