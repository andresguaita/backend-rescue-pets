const {Transaction} = require('../db.js') 
 

const getDonaStatis = async(req,res)=>{
    const {id} = req.params 
    if(id){
        try {
            let idTrans= await Transaction.findAll({
                where:{
                    shelterId: id
                }
            })
            res.status(200).json(idTrans)
        } catch (error) {
            res.status(500).send(error)
        }
    } else{
    try {
        const allTrans= await Transaction.findAll()
        res.status(200).json(allTrans)
    } catch (error) {
        res.status(500).send(error)
    }}

}
module.exports = getDonaStatis;