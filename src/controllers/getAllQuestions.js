const {Questions} = require('../db.js') 

exports.getAllQuestions = async(req,res)=>{
    try {
        let allQuestions = await Questions.findAll()
        if(allQuestions) res.status(200).json(allQuestions)
    } catch (error) {
        res.status(500).send(error)
    }
}