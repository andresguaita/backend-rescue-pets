const {Genres} = require('../db')

 async function getGenres (req, res) {
    try {   
        const allGenres = await Genres.findAll();


        res.status(200).json(allGenres);
        
    } catch (error) {
        console.log(error);
        res.json("Didn't found information");
    }   
};

module.exports = {getGenres}
