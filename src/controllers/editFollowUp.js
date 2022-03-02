const { FollowUp } = require('../db')

 async function editFollowUp (req, res) {
    let {followUpId} = req.params;
    let {followUpStatusId, followUpDate1, followUpDate2, followUpDate3} = req.body;
    console.log(req.body)

    try {   
        await FollowUp.update({
            followUpStatusId: followUpStatusId,
            followUpDate1: followUpDate1,
            followUpDate2: followUpDate2,
            followUpDate3: followUpDate3
        },
            {where: 
            {id: followUpId}
        });
        res.status(200).json("Follow up edited successfully");
        
    } catch (error) {
        console.log(error);
        res.json(error);
    }   
};

module.exports = {editFollowUp}