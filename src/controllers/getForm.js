const {Forms,Questions,Shelter,Adoptions,Requests,FormType} = require('../db.js') 
    
exports.getForm = async(req,res)=>{
        const {userid} = req.params
        const {formtypeid} = req.query
        try{
            let shelterFilter = await Shelter.findOne({
                where:{
                    userId : userid
                }
            })
            let allForms = await Forms.findAll({
                where:{
                    shelterId: shelterFilter.id,
                    formtypeId : formtypeid
                },
                include:{
                    model : Questions,
                    through : {
                        attributes : []
                    }
                }
            })
            if(allForms.length){
                let formid = allForms[0].id
                let adoptionsAnswers = await Adoptions.findAll({
                    where:{
                        formId : formid
                    },
                    include: {
                        model : Forms,
                        attributes : ['formtypeId']
                    }
                })
                if(adoptionsAnswers.length) return res.status(200).json(adoptionsAnswers)
                let requestsAnswers = await Requests.findAll({
                    where:{
                        formId : formid
                    },include: {
                        model : Forms,
                        attributes : ['formtypeId']
                    }
                })
                if(requestsAnswers.length) return res.status(200).json(requestsAnswers)
                else return res.status(400).send('not forms found')
            }else return res.status(400).send('not forms found')
        }catch(error){
            return error
        }    
}