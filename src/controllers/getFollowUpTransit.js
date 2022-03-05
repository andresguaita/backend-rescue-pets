const {FollowUpTransit, Profiles, Users} = require('../db')
// const {Adoptions, Requests, Shelter} = require('../db')

 async function getFollowUpTransits (req, res) {
    let {shelterId} = req.params;

    try {   
        const allFollowUpTransits = await FollowUpTransit.findAll({
            where: {
                shelterId : shelterId
            },
            include: [Profiles, Users], 
        });
        res.status(200).json(allFollowUpTransits);
        
    } catch (error) {
        console.log(error);
        res.json("Didn't found any follow ups");
    }   
};

module.exports = {getFollowUpTransits}
