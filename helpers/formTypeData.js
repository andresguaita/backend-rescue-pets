const {Formtype} = require('../src/db')

exports.setFormType =  () => {

    const formTypeList = [{id:1, typeName:'Tránsito'},{id: 2,typeName: 'Adopción'},{id: 3, typeName:'Rescate'}]
    try{
        formTypeList.forEach(async element => {
            await Formtype.findOrCreate({
                where: {
                    id: element.id,
                    typeName : element.typeName
        
                }
            })
        });
    }catch(error){
        return error
    }
}