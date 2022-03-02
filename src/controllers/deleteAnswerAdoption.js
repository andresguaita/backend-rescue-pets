const {Adoptions,Requests} = require('../db.js') 
    
exports.deleteAnswerAdoption = async(req,res)=>{
        const {formid} = req.query
        const {type} = req.params
        try{
            if(type === "adoption"){
                Adoptions.destroy({
                    where:{
                        id : formid
                    }
                })
            }
            if(type === "request"){
                Requests.destroy({
                    where:{
                        id : formid
                    }
                })
            }
            res.status(200).send('done') 
        }catch(error){
            return error
        }    
}