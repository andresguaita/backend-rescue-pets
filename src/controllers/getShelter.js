const { response } = require("express");
const { Op } = require("sequelize");
const {
  Users,
  Shelter,
} = require("../db");


exports.getSheltersById =  async(req, res= response) => {

    const {id} = req.params

  try {
    const shelters = await Shelter.findOne({
      where: { userId: id },
      include: {
          model: Users,
          attributes: ['id','email']
      }

      
    });
    
    return res.json({
        ok: true,
        id: shelters.id,
        name: shelters.name,
        address: shelters.address,
        phoneNumber: shelters.phoneNumber,
        description: shelters.description
    })
  } catch (error) {
    console.log(error);
  }
};

exports.updateShelter =  async(req, res= response) => {

    const {id} = req.params

    try {
        
        const shelter= await Shelter.findByPk(id)

        if(!shelter){
            res.status(404).json({
                ok:false,
                msg: 'Refugio no existe'
            })
        }

        const newData= {
            ...req.body,
        }

        await Shelter.update(
             newData,
            { where: { id: id } }
          )

      const shelterUpdated= await Shelter.findByPk(id)

    return res.json({
        ok: true,
        shelterUpdated
    })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
};



