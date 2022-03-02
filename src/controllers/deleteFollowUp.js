const { FollowUp } = require('../db')

 async function deleteFollowUp (req, res) {
    let {followUpId} = req.params;
    try {   
        await FollowUp.destroy({
            where: {
                id: followUpId
            }
        });
        res.status(200).json("Follow up erased successfully");
        
    } catch (error) {
        console.log(error);
        res.json(error);
    }   
};

module.exports = {deleteFollowUp}