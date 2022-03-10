const { Alerts} = require('../db')

 async function deleteAlert (req, res)  {
    const { id } = req.params;

    try {
        const alert = await Alerts.findByPk(id)
        console.log(alert)
        await alert.destroy().then(() => res.status(200).send("Ok")).catch(()=> res.status(400))
     

    } catch (error) {
        console.log(error)
    }
};

module.exports = {deleteAlert}

