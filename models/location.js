'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.user = Location.belongsTo(models.User, {
        foreignKey: 'user_id',
      })

      this.actvities = Location.belongsTo(models.Actvities, {
        foreignKey: 'actvities_id',
      })
    }
  }
  
  location.init({
    state: DataTypes.STRING,
    city: DataTypes.STRING,
    Actvities_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'location',
  });
  return location;
};