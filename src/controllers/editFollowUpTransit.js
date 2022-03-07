const { FollowUpTransit } = require('../db')

 async function editFollowUpTransit (req, res) {
    let {editableTransitId} = req.params;
    let {data} = req.body;
    console.log(req.body)

    try {   
        const edited = await FollowUpTransit.update({
            petsAssigned: data,

        },
            {where: 
            {id: editableTransitId}
        });
        res.status(200).json(edited);
        
    } catch (error) {
        console.log(error);
        res.json(error);
    }   
};

module.exports = {editFollowUpTransit}