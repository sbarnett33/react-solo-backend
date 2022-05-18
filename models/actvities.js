'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Actvities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.users = Actvities.hasMany(models.Users, {
        foreignKey: 'actvities_id'
      })
    }
  }
  Actvities.init({
    user_id: DataTypes.INTEGER,
    actvity: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Actvities',
  });
  return Actvities;
};