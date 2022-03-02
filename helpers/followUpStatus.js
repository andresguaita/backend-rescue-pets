const { FollowUpStatus } = require('../src/db')

exports.followUpStatus =  () => {

    const statuses = ['Por iniciar', 'En proceso', 'Concluido']
    try{
        statuses.forEach(async element => {
            await FollowUpStatus.findOrCreate({
                where: {
                    followUpStatus : element
        
                }
            })
        });
    }catch(error){
        return error
    }
}