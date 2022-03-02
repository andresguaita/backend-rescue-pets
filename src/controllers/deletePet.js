const {Pets} = require('../db')

 async function deletePet (req, res) {
    let {petId} = req.params;
    try {   
        await Pets.destroy({
            where: {
                id: petId
            }
        });
        res.status(200).json("Pet deleted successfully");
        
    } catch (error) {
        console.log(error);
        res.json(error);
    }   
};

module.exports = {deletePet}
