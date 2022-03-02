const {Formtype} = require('../db.js') 
    
exports.getFormtypes = async(req,res)=>{
            let formtypes= await Formtype.findAll()
            if(formtypes.length) return res.status(200).json(formtypes)
            else res.status(400).send('no data in formtypes')
}