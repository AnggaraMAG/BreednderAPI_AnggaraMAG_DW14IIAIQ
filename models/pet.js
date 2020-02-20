'use strict';
module.exports = (sequelize, DataTypes) => {
  const pet = sequelize.define('pet', {
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    species: DataTypes.INTEGER,
    age: DataTypes.STRING,
    user: DataTypes.INTEGER,
    about_pet: DataTypes.STRING,
    photo: DataTypes.STRING
  }, {});
  pet.associate = function (models) {
    pet.belongsTo(models.user, {
      foreignKey: "user",
      as: "breeder"
    });
    pet.belongsTo(models.species, {
      foreignKey: "species",
      as: "category"
    })
  };
  return pet;
};