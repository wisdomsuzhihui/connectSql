/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Plat_Apply', {
    ApplyID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PlatName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    FullName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CompanyName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Job: {
      type: "NCHAR",
      allowNull: false
    },
    Phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    WebSite: {
      type: DataTypes.STRING,
      allowNull: true
    },
    State: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'Plat_Apply'
  });
};
