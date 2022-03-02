const countries = require('../src/utils/countries.json')
const {Countries} = require('../src/db')

exports.setCountries =  () => {
    try{
        countries.countries.forEach(async element => {
            await Countries.findOrCreate({
                where: {
                    id : element.id,
                    country : element.name,
                    flag: element.flag
                }
            })
        });
    }catch(error){
        return error
    }
}