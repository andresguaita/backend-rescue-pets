const age = require('../src/utils/age.json')
const {Age} = require('../src/db')

exports.setAge =  () => {
    try{
        age.age.forEach(async element => {
            await Age.findOrCreate({
                where: {
                    age : element.age,
                    range : element.range
                }
            })
        });
    }catch(error){
        return error
    }
}