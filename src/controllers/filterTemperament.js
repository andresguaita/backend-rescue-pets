const {Pets, Temperament} = require('../db.js')
 
exports.filterTemperament = async(req,res)=>{
    const { idTemperament } = req.params
    try{
        if(isNaN(idTemperament)) return 'no string'
        let petsWithIdTemperament = await Pets.findAll({
            where:{
                temperamentId : idTemperament
            },
            include : [Temperament]
        })
        if(petsWithIdTemperament.length){
            return res.status(200).json(petsWithIdTemperament)
        }else{
            return res.status(204).send('no pets with this temperament')
        }
    }catch(error){
        return res.status(400).send(error)
    }    
}
