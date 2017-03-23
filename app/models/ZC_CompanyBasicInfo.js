/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_CompanyBasicInfo', {
    CompanyBasicInfoID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ProjectID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CompanyName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    LegalPerson: {
      type: DataTypes.STRING,
      allowNull: false
    },
    RegisteredCapital: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    RegistrationPlace: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CreateDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Industry: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'ZC_CompanyBasicInfo'
  });
};
