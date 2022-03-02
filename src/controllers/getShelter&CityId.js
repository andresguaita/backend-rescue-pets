const {Shelter} = require("../db.js")

async function getShelterAndCityId (req, res) {
    const {userId} = req.params
    // console.log('flag--------------------------->',userId)
    try {   
        const getShelter = await Shelter.findOne({
            where: {
                userId:  userId
            }
        });

        const filteredData =  {
            shelterId: getShelter.id,
            cityId: getShelter.cityId
        }

        console.log(getShelter)
        res.status(200).json(filteredData);
        
    } catch (error) {
        console.log(error);
        res.json("No se encontro la informacion");
    }   
};

module.exports = {getShelterAndCityId}