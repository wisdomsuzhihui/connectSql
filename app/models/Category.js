/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Category', {
    CategoryID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ParentID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CategoryLevel: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ClassName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    OrderID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Level: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'Category'
  });
};
