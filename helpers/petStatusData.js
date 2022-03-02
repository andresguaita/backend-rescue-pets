const petstatus = require('../src/utils/petStatus.json')
const {PetStatus} = require('../src/db')

exports.setPetStatus =  () => {
    try{
        petstatus.petstatus.forEach(async element => {
            await PetStatus.findOrCreate({
                where: {
                    id: element.id,
                    status : element.status
                }
            })
        });
    }catch(error){
        return error
    }
}