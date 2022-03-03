const {Pets} = require('../db')

 async function hidePetInDashboard (req, res) {
    let {petId} = req.params;
    let {hideFromDash} = req.body;
    console.log(req.body)


    try {   
        await Pets.update({
            hideFromDash: hideFromDash

        },
            {where: 
            {id: petId}
        });
        res.status(200).json("Pet successfully hidden");
        
    } catch (error) {
        console.log(error);
        res.json(error);
    }   
};

module.exports = {hidePetInDashboard}