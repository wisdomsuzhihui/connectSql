/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ZC_CessionOrder', {
    CessionOrderID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CessionID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ProjectID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Share: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    PayStatus: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    PayDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IsFinished: {
      type: "BIT",
      allowNull: false
    },
    State: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'ZC_CessionOrder'
  });
};
