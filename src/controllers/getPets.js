const { response } = require("express");
const { Op } = require("sequelize");
const {
  Pets,
  Age,
  Temperament,
  Vaccines,
  Species,
  PetStatus,
  Shelter,
} = require("../db");
const { getSheltersByCity } = require("./getSheltersByCity");

exports.getPets = async (req, res = response) => {
  const city = req.params.idCity;
  const filters = req.query || "";
  const shelters = [];

  const sheltersByCity = await getSheltersByCity(city);

  sheltersByCity.map(({ id }) => shelters.push(id));

  let where = [];

  Object.entries(filters).forEach(([key, value]) => {
    where.push({ [key]: value });
  });

  const query = {
    include: [Age, Temperament, Vaccines, Species, PetStatus, Shelter],
    where: { [Op.and]: where, shelterId: { [Op.in]: shelters } },
  };

  try {
    const petsAll = await Pets.findAll(query);
    petsAll.length
      ? res.status(200).send(petsAll)
      : res.status(200).send("Pets not found");
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error connecting to the database",
    });
  }
};
