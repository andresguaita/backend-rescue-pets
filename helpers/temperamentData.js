const temperaments = require('../src/utils/temperaments.json')
const {Temperament} = require('../src/db')

exports.setTemperaments =  () => {
    try{
        temperaments.temperaments.forEach(async element => {
            await Temperament.findOrCreate({
                where: {
                    temperament : element.nombre 
                }
            })
        });
    }catch(error){
        return error
    }
}