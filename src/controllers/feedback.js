const axios = require("axios");
const { Transaction, Shelter } = require("../db");

const feedback = async (req, res) => {
  const ref = req.query.external_reference;
  const shelterId = ref.split("_");

  let redirect =
    shelterId.length < 3
      ? `http://localhost:3000/shelters/${shelterId[1]}`
      : `http://localhost:3000/details/${shelterId[2]}`;
  try {
    const shelter = await Shelter.findByPk(shelterId[1]);
    let transaction;
    const config = {
      headers: { Authorization: `Bearer ${shelter.accessToken}` },
    };
    await axios
      .get(
        `https://api.mercadopago.com/v1/payments/${req.query.payment_id}`,
        config
      )
      .then((response) => {
        transaction = response.data;
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(transaction.currency_id);
    await Transaction.create({
      amount: transaction.transaction_amount,
      currency: transaction.currency_id,
      paymentId: transaction.id,
      shelterId: shelterId[1],
      state: transaction.status,
    });

    res.status(200).redirect(redirect);
  } catch (error) {
    console.log(error);
  }
};

module.exports = feedback;
