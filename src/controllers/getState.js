const { response } = require("express");
const { States } = require("../db");
const states = require("../utils/states.json");

const getState = async (req, res = response) => {
  const { id, countryId } = req.query;

  if (countryId) {
    let data = states.states.filter((e) => e.id_country == countryId);

    data.forEach((element) => {
      States.findOrCreate({
        where: {
          id: element.id,
          state: element.name,
          countryId: `${element.id_country}`,
        },
      });
    });

    try {
      const AllStates = await States.findAll({
        where: {
          countryId: countryId
        }
      });
      res.status(200).send(AllStates)
    } catch (error) {
      console.log(error)
    }
  } else {
    res.send('Necesitas enviar un countryId como query')
  }

};

module.exports = getState;
