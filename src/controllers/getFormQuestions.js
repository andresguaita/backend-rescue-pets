const {Forms,Questions} = require('../db')

exports.getFormQuestions = async(req,res)=>{
    const {shelterid} = req.params
    const {formtypeid} = req.query
    let formquestions = await Forms.findAll({
        where: {
            shelterId: shelterid,
            formtypeId: formtypeid
        },
        include : {
            model: Questions,
            through: {
                attributes :[]
            }
        }
    })
    return res.status(200).json(formquestions)
}