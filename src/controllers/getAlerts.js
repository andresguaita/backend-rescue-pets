const {Alerts} = require('../db')

 async function getAlerts (req, res) {
    try {   
        const allAlerts = await Alerts.findAll();
          console.log(Alerts)

        res.status(200).json(allAlerts);
        
    } catch (error) {
        console.log(error);
        res.json("Didn't found information");
    }   
};

module.exports = {getAlerts}
