/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('endpoints', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    urlEndpoint: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    urlType: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    urlEnabled: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    timestamps: false,
    tableName: 'endpoints'
  });
};
