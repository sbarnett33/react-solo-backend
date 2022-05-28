"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Food extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.Reaction = Food.hasMany(models.Reaction);
    }
  }
  Food.init(
    {
      brand: DataTypes.STRING,
      flavor: DataTypes.STRING,
      type: DataTypes.STRING,
      price: DataTypes.INTEGER,
      picture: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Food",
    }
  );
  return Food;
};
