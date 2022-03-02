const species = require('../src/utils/species.json')
const {Species} = require('../src/db')

exports.setSpecies =  () => {
    try{
        species.species.forEach(async element => {
            await Species.findOrCreate({
                where: {
                    specie : element.specie 
                }
            })
        });
    }catch(error){
        return error
    }
}