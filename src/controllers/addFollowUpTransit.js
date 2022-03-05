const { FollowUpTransit } = require('../db')

async function addFollowUpTransit (req, res) {
    let {profileId, userId, requestId, shelterId } = req.body;

    try {
            const addTransitFollowUp = await FollowUpTransit.create({profileId, userId, requestId, shelterId})            
            res.status(200).json("Transit Follow up added successfully");
        } catch (error) {
            console.log(error)
            res.status(500).json({
                error: error,
                msg: "Couldn't add new Transit Follow up"
            })
    }
}

module.exports = {addFollowUpTransit}