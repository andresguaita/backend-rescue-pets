const { Pets } = require('../db')

 async function editPetInTransitStatus (req, res) {
    let {status} = req.params;
    let {data} = req.body;
    // console.log("dataaaa--------------->",data)
    
    try {   
    if(Array.isArray(data)){
        const result = data.forEach(async (el) => {
            await Pets.update({
                inTransit: status,
            },
            {where: 
                {id: el.id}
            })
        })
    
            res.status(200).json("In-transit status updated to true sucessfully");
    } else {
        await Pets.update({
            inTransit: status,
        },
        {where: 
            {id: data}
        })
        res.status(200).json("In-transit status updated to false sucessfully");
    }
        
    } catch (error) {
        console.log(error);
        res.json(error);
    }   
};

module.exports = {editPetInTransitStatus}