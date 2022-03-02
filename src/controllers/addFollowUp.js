const { FollowUp } = require('../db')

async function addFollowUp (req, res) {
    let {followUpStatusId, profileId, adoptionId, requestId, shelterId, petId, userId} = req.body;

    try {
            const addFollowUpforPet = await FollowUp.create({followUpStatusId, profileId, adoptionId, requestId, shelterId, petId, userId})            
            res.status(200).json("Follow up added successfully");
        } catch (error) {
            console.log(error)
            res.status(500).json({
                error: error,
                msg: "Couldn't add new Follow up"
            })
    }
}

module.exports = {addFollowUp}