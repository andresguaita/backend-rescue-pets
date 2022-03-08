require("dotenv").config();

const mercadopago = require("mercadopago");
const { Transaction, Shelter } = require("../db");

const { APIGATEWAY_URL } = process.env;

const postPreferences = async (req, res) => {
  const { shelterId, petId } = req.body;

  try {
    const shelter = await Shelter.findByPk(shelterId);

    mercadopago.configure({
      access_token: shelter.accessToken,
    });

    let preference = {
      items: [
        {
          id: `shelter_${shelterId}`,
          title: req.body.description,
          currency_id: "USD",
          unit_price: Number(req.body.amount),
          quantity: Number(req.body.quantity),
        },
      ],
      back_urls: {
        success: `${APIGATEWAY_URL}/donaciones/feedback`,
        failure: `${APIGATEWAY_URL}/donaciones/feedback`,
        pending: `${APIGATEWAY_URL}/donaciones/feedback`,
      },
      external_reference: `shelter_${shelterId}_${petId}`,
      // auto_return: "approved",
    };

    mercadopago.preferences
      .create(preference)
      .then((response) => {
        res.json({
          id: response.body.id,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (error) {
    return error;
  }
};

module.exports = postPreferences;
