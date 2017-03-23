/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_MyBankCard', {
    MyBankCardID: {
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
    City: {
      type: DataTypes.STRING,
      allowNull: true
    },
    BankName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    BankStyle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    BranchName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CardID: {
      type: DataTypes.STRING,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Phone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    IsWAP: {
      type: "BIT",
      allowNull: false
    }
  }, {
    tableName: 'ZC_MyBankCard'
  });
};
