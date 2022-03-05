const { FollowUp } = require('../db')

 async function hideFollowUpfromDash (req, res) {
    let {followUpId} = req.params;
    let {hideFollowUp} = req.body;
    // console.log(req.body)
    // console.log(req.params)


    try {   
        await FollowUp.update({
            hideFollowUp: hideFollowUp,
        },
            {where: 
            {id: followUpId}
        });
        res.status(200).json("Follow up successfully hidden");
        
    } catch (error) {
        console.log(error);
        res.json(error);
    }   
};

module.exports = {hideFollowUpfromDash}