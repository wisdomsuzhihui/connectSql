/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UserProjectSetting', {
    SettingID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    StartAmount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    CompleteRate: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    CategoryID: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Platform: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'UserProjectSetting'
  });
};
