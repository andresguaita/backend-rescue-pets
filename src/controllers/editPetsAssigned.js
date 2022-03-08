const { FollowUpTransit } = require('../db')

 async function editPetsAssigned (req, res) {
    let {editableTransitId} = req.params; // transitId = 1
    let {data} = req.body;  //  [{id: 5, name: 'Nuky'}]
    // console.log("body-------------------->",req.body)
    console.log("data----------------------->", data)
    console.log("data.id----------------------->", data[0].id)

    try {   
        const edited = await FollowUpTransit.findOne({

            where: 
            {id: editableTransitId}

        })
        console.log("edited.petsAssigned--------------------------->",edited.petsAssigned)
        const resultado = edited.petsAssigned.filter(el => el.id !==  data[0].id)
        console.log("resultado--------------------------->", resultado)

        const update = await FollowUpTransit.update({
            petsAssigned: resultado,
        },
        {where: 
            {id: editableTransitId}
        })


        res.status(200).json(update);
        
    } catch (error) {
        console.log(error);
        res.json(error);
    }   
};

module.exports = {editPetsAssigned}