"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.actvities = user.hasMany(models.actvities, {
        foreignKey: "user_id",
      });
    }
  }
  user.init(
    {
      email: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.TEXT,
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
