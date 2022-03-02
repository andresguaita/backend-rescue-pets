const {Forms,Questions} = require('../db.js') 
const {Formtype} = require('../db.js')

exports.editForm = async(req,res)=>{
        const {formid} = req.params
        const {formtypeid} = req.query
        const {questions} = req.body
        try{
            if(formid && formtypeid){
                let formtype = await Formtype.findOne({
                    where:{
                        id : formtypeid
                    }
                })
    
                let shelterid = await Forms.findOne({
                    where:{
                        id: formid,
                    }
                })
                
                let temp1 = await Forms.destroy({
                    where:{
                        id: formid,
                    }
                })
    
                let temp2 = await Forms.create({
                    id : formid,
                    formName : formtype.typeName,
                    formtypeId : formtypeid,
                    shelterId : shelterid.shelterId
                })
    
                questions.map(async question => {
                        let q = await Questions.findOne({
                            where:{
                                id : question
                            }
                        })
                        temp2.addQuestions(q)
                })
                return res.status(200).json(temp2) 
            }else{
                return res.status(400).send('wrong data')
            }
        }catch(error){
            return res.status(500).send(error)
        }    
}