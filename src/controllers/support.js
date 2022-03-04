const {TechnicalSupport} = require('../db')

 async function getSupport (req, res) {
    try {
        const allSupport =  await TechnicalSupport.findAll();
        allSupport.length !== 0 ?
        res.status(200).json(allSupport)
        : res.status(400).json('No hay pedidos de soporte') 
    } catch (error) {
        console.log(error)
    }
};

async function postSupport (req, res) {

    let {email, type, description, isUser} = req.body
    try {
        const supportCreated =  await TechnicalSupport.create({
            email: email,
            type: type,
            description: description,
            isUser: isUser
        });
       supportCreated &&  res.status(201).json(supportCreated)
       
    } catch (error) {
        console.log(error)
        res.status(404).json('No se pudo crear comentario de soporte')
    }
};

async function putSupport (req, res) {

    let {idSuport} = req.params
    let {status, comments, userId} = req.body
   
    try {   
        await TechnicalSupport.update({
            status: status,
            comments: comments,
            userId: userId
        },
            {where: 
            {id: idSuport}
        });
        res.status(200).json("Support edited");
        
    } catch (error) {
        console.log(error);
        res.json(error);
    }   
};

module.exports = {
    getSupport, 
    postSupport,
    putSupport
}
