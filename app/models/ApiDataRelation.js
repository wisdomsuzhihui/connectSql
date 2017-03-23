/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ApiDataRelation', {
    ApiDataRelationID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ApiUserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ObjectID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ObjectType: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PostDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    State: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'ApiDataRelation'
  });
};
