const {Formtype} = require('../src/db')

exports.setFormType =  () => {

    const formTypeList = ['Adopción', 'Tránsito', 'Rescate']
    try{
        formTypeList.forEach(async element => {
            await Formtype.findOrCreate({
                where: {
                    typeName : element
        
                }
            })
        });
    }catch(error){
        return error
    }
}