"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Reaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.Dog = Reaction.belongsTo(models.Dog, {
        foreignKey: "DogId",
      });

      this.Food = Reaction.belongsTo(models.Food, {
        foreignKey: "FoodId",
      });
    }
  }
  Reaction.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Reaction",
    }
  );
  return Reaction;
};
