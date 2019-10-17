/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('urltypes', {
    uid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    urltype: {
      type: DataTypes.STRING(65),
      allowNull: false
    }
  }, {
    tableName: 'urltypes'
  });
};
