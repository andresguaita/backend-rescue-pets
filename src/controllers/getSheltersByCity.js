const { response } = require("express");
const {
  Pets,
  Age,
  Temperament,
  Vaccines,
  Species,
  PetStatus,
  Shelter,
} = require("../db");

exports.getSheltersByCity = async (city) => {
  try {
    const shelters = await Shelter.findAll({
      where: { cityId: city },
    });
    return shelters;
  } catch (error) {
    console.log(error);
  }
};
