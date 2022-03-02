const roles = require('../src/utils/roles.json')
const {Roles} = require('../src/db')

exports.setRoles =  () => {
    try{
        roles.roles.forEach(async element => {
            await Roles.findOrCreate({
                where: {
                    id: element.id,
                    role : element.role 
                }
            })
        });
    }catch(error){
        return error
    }
}