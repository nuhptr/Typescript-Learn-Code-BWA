"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
   class user extends Model {
      static associate(models) {
         // define association here
      }
   }
   user.init(
      {
         username: DataTypes.STRING,
         password: DataTypes.STRING,
      },
      {
         sequelize,
         modelName: "user",
         underscored: true,
      }
   )
   return user
}
