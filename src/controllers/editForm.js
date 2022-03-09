const {Forms,Questions} = require('../db.js') 
const {Formtype} = require('../db.js')

exports.editForm = async(req,res)=>{
        const {formid} = req.params
        const {formtypeid} = req.query
        const {questions} = req.body
        try{
            if(formid){
                let form = await Forms.findOne({
                    where:{
                        id: formid,
                    }
                })
                questions.map(async question => {
                        let q = await Questions.findOne({
                            where:{
                                id : question
                            }
                        })
                        await form.setQuestions(q)
                        await form.addQuestions(q)
                })
                return res.status(200).json(form) 
            }else{
                return res.status(400).send('wrong data')
            }
        }catch(error){
            return res.status(500).send(error)
        }    
}