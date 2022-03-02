const {Forms,Questions} = require('../db.js') 
    
exports.getFormByShelter = async(req,res)=>{
        const {shelterid} = req.params
        const {formtypeid} = req.query
        try{
            let allForms = await Forms.findAll({
                where:{
                    shelterId: shelterid,
                    formtypeId : formtypeid
                },
                include:{
                    model : Questions,
                    through : {
                        attributes : []
                    }
                }
            })
            if(!allForms.length) return res.status(200).send('not forms found')
        return res.status(200).json(allForms)    
        }catch(error){
            return error
        }    
}