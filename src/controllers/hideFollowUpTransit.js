const { FollowUpTransit } = require('../db')

 async function hideTransitfromDash (req, res) {
    let {transitId} = req.params;
    let {hideTransit} = req.body;
    // console.log(req.body)
    // console.log("hideTransit", hideTransit)
    // console.log(req.params)


    try {   
        await FollowUpTransit.update({
            hideTransit: hideTransit,
        },
            {where: 
            {id: transitId}
        });
        res.status(200).json("Transit successfully hidden");
        
    } catch (error) {
        console.log(error);
        res.json(error);
    }   
};

module.exports = {hideTransitfromDash}