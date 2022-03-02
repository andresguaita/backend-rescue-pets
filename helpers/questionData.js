const questions = require('../src/utils/questions.json')
const {Questions} = require('../src/db')

exports.setQuestions =  () => {
    try{
       questions.forEach(async element => {
            await Questions.findOrCreate({
                where: {
                    question : element.question
                }
            })
        });
    }catch(error){
        return error
    }
}