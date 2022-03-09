const { Alerts} = require('../db')

 async function deleteAlert (req, res)  {
    const { id } = req.params;

    try {
        const alert = await Alerts.findAll({
            where: {
                id: id
            }
        })
        if (alert) {
            Alerts.destroy({
                where: {
                    id: id
                }
            })
            return res.status(200)
        } else {
            return res.status(404).send("error")
        }

    } catch (error) {
        console.log(error)
    }
};

module.exports = {deleteAlert}

