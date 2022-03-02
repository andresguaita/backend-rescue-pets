const {FollowUpStatus} = require('../db')

 async function getFollowUpStatuses (req, res) {
    try {   
        const gotFollowUpStatuses = await FollowUpStatus.findAll();
        console.log(gotFollowUpStatuses)
        res.status(200).json(gotFollowUpStatuses);
        
    } catch (error) {
        console.log(error);
        res.json("Didn't found information for given request");
    }   
};

module.exports = {getFollowUpStatuses}
