const {FollowUp, FollowUpStatus, Profiles, Pets, Users } = require('../db')
// const {Adoptions, Requests, Shelter} = require('../db')

 async function getFollowUpsFromShelter (req, res) {
    let {shelterId} = req.params;

    try {   
        const allFollowUps = await FollowUp.findAll({
            where: {
                shelterId : shelterId
            },
            include: [FollowUpStatus, Profiles, Pets, Users], 
        });
        res.status(200).json(allFollowUps);
        
    } catch (error) {
        console.log(error);
        res.json("Didn't found any follow ups");
    }   
};

module.exports = {getFollowUpsFromShelter}
