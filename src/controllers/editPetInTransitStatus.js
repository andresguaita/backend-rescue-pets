const { Pets } = require('../db')

 async function editPetInTransitStatus (req, res) {
    let {status} = req.params;
    let {data} = req.body;
    console.log(data)
    
    try {   

    const result = data.forEach(async (el) => {
        await Pets.update({
            inTransit: status,
        },
        {where: 
            {id: el.id}
        })
    })

        res.status(200).json("In-transit status updated sucessfully");
        
    } catch (error) {
        console.log(error);
        res.json(error);
    }   
};

module.exports = {editPetInTransitStatus}