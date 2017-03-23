/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PlatBusinessInfo', {
    BusinessInfoID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PlatID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    BusinessName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    IcCode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    linkMan: {
      type: DataTypes.STRING,
      allowNull: false
    },
    OrgCode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    TaxCode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    City: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    LinkMobile: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    BusinessLicense: {
      type: DataTypes.STRING,
      allowNull: true
    },
    WechatID: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CompanyActive: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ProjectSuccessNum: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ActiveTotal: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    IsShowIndex: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'PlatBusinessInfo'
  });
};
