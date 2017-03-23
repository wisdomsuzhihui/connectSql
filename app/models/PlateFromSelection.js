/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PlateFromSelection', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PlateName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Field: {
      type: DataTypes.STRING,
      allowNull: false
    },
    UserName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Position: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Phone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PlateForm: {
      type: DataTypes.STRING,
      allowNull: true
    },
    SuccessNum: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TotalAmount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    ExitProjectNum: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Selection: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'PlateFromSelection'
  });
};
