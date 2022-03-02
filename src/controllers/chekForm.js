const {FollowUp} = require('../db')

exports.checkForm = async(req,res)=>{
    const {shelterid} = req.params 
    try {
        let allFollowUp = await FollowUp.findAll({
            where:{
                shelterId : shelterid
            }
        })
        res.status(200).json(allFollowUp)
    } catch (error) {
        res.status(500).send(error)
    }
}