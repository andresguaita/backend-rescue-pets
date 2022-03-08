const { Shelter } = require("../db");
const axios = require("axios");

const putPreferences = async (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  console.log(id);

  const shelter = await Shelter.findByPk(req.body.shelterId);

  const config = {
    headers: { Authorization: `Bearer ${shelter.accessToken}` },
  };

  try {
    let preference = {
      items: [
        {
          id: `shelter_${shelter.id}`,
          title: req.body.description,
          currency_id: "USD",
          unit_price: Number(req.body.amount),
          quantity: Number(req.body.quantity),
        },
      ],
    };

    await axios
      .put(
        `https://api.mercadopago.com/checkout/preferences/${id}`,
        preference,
        config
      )
      .then((response) => {
        res.json(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    return error;
  }
};

module.exports = putPreferences;
