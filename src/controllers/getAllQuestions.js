const {Questions} = require('../db.js') 

exports.getAllQuestions = async(req,res)=>{
    try {
        let allQuestions = await Questions.findAll()
        if(allQuestions) res.status(200).json(allQuestions)
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.postSupport = async (req, res) => {

    let {question} = req.body
    try {
        const questionCreated =  await Questions.create({
            question: question,
        });
        questionCreated &&  res.status(201).json("Pregunta creada")
       
    } catch (error) {
        console.log(error)
        res.status(404).json('No se pudo crear comentario pregunta')
    }
};

exports.putQuestions = async (req, res) => {

    let {idquestion} = req.params
    let {question} = req.body
   
    try {   
        await Questions.update({
            question: question,
        },
            {where: 
            {id: idquestion}
        });
        res.status(200).json("Pregunta editada");
        
    } catch (error) {
        console.log(error);
        res.json("no se ha podido editar pregunta");
    }   
};

