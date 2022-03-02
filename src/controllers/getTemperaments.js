const {Temperament} = require('../db')

 async function getTemperaments (req, res) {
    try {   
        const gotTemperaments = await Temperament.findAll();
        console.log(gotTemperaments)
        res.status(200).json(gotTemperaments);
        
    } catch (error) {
        console.log(error);
        res.json("Didn't found information");
    }   
};

module.exports = {getTemperaments}
