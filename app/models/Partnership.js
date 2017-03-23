/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Partnership', {
    PartnershipID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ProjectID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CompanyName: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'Partnership'
  });
};
