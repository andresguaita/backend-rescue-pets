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

module.exports = getSupport
