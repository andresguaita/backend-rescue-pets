const cities = require('../src/utils/cities.json')
const {Cities} = require('../src/db')

exports.setCities =  async() => {
    try{
        cities.forEach(async element => {
            await Cities.findOrCreate({
                where: {
                    id : element.id,
                    city : element.name,
                    stateId : element.id_state
                }
            })
        });
    }catch(error){
        return error
    }
}