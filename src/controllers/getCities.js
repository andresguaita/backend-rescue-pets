const { response } = require('express')
const { Cities } = require('../db')
const cities = require('../utils/cities.json')

const getCities = async(req, res= response) => {

    const { stateId } = req.query

    if (stateId){
        let data = cities.filter(e => e.id_state == stateId)
  
        data.forEach(element => {
            Cities.findOrCreate({
                where: {
                    id : element.id,
                    city: element.name,
                    stateId: `${element.id_state}`
                }
            })
        });
    
        try {
            const AllCities = await Cities.findAll({
                where: {
                    stateId: stateId 
                }
            })
            res.status(200).send(AllCities)
        } catch (error) {
            console.log(error)
        }
    } else{
        res.send('Necesitas enviar un stateId como query')
    }
    
    
    

   
}

module.exports=getCities