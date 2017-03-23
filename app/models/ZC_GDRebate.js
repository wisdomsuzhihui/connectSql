/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_GDRebate', {
    GDRebateID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Amount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    ExpirationDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    IsExpiration: {
      type: "BIT",
      allowNull: false
    }
  }, {
    tableName: 'ZC_GDRebate'
  });
};
