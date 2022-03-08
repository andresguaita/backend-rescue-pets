const { FollowUpTransit } = require('../db')

 async function editFollowUpTransit (req, res) {
    let {editableTransitId} = req.params;
    let {data} = req.body;
    console.log(req.body)

    try {   
        const edited = await FollowUpTransit.findOne({

            where: 
            {id: editableTransitId}

        })

        // console.log("edited------------------>",edited)
        const petsAssigned = edited.petsAssigned
        // console.log("petsAssigned------------------>",petsAssigned)

        
        if(petsAssigned === null || petsAssigned === 'empty'){
            const edited2 = await FollowUpTransit.update({
                petsAssigned: data,
    
            },
                {where: 
                {id: editableTransitId}
            });
            return res.status(200).json(edited2);

        } else {
            const fusion = data.concat(petsAssigned)
            // console.log("fusion----->", fusion)
            const edited3 = await FollowUpTransit.update({
                petsAssigned: fusion,
    
            },
                {where: 
                {id: editableTransitId}
            });
            return res.status(200).json(edited3);


        }



        
    } catch (error) {
        console.log(error);
        res.json(error);
    }   
};

module.exports = {editFollowUpTransit}