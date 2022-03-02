const {Age} = require('../db')

 async function getAges (req, res) {
    try {   
        const gotAges = await Age.findAll();


        console.log(gotAges)
        res.status(200).json(gotAges);
        
    } catch (error) {
        console.log(error);
        res.json("Didn't found information");
    }   
};

module.exports = {getAges}
