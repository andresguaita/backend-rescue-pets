const states = require('../src/utils/states.json')
const {States} = require('../src/db')

exports.setStates =  () => {
    try{
        states.states.forEach(async element => {
            await States.findOrCreate({
                where: {
                    id: element.id,
                    state : element.name,
                    countryId: element.id_country
                }
            })
        });
    }catch(error){
        return error
    }
}