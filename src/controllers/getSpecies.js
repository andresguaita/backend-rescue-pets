const { Species } = require('../db')

 async function getSpecies (req, res) {
    try {   
        const gotSpecies = await Species.findAll();
        console.log(Species)
        res.status(200).json(gotSpecies);
        
    } catch (error) {
        console.log(error);
        res.json("Didn't found information");
    }   
};

module.exports = {getSpecies}
