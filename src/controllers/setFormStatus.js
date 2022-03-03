const {Adoptions,Requests} = require('../db')

exports.setFormStatus = async(req,res)=>{
    const {id,formid,status} = req.params
    let adop = await Adoptions.update({
        status:status
    },
        {where: 
        {id: id,
        formId: formid}
    });
    let reque = await Requests.update({
        status:status
    },
        {where: 
        {id: id,
        formId: formid}
    });
    return res.status(200).json(adop)
}