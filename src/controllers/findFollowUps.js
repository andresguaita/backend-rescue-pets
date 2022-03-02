const {FollowUp, FollowUpStatus, Profiles, Pets, Users } = require('../db')
const {sendEmailReminder} = require('../controllers/sendEmailReminder')

 async function findFollowUp (req, res) {
    let {followUpId} = req.body;
    try {   
        const foundFollowUp = await FollowUp.findOne({
            where: {
                id: followUpId
            },
            include: [FollowUpStatus, Profiles, Pets, Users]
        });

        const data = {
            email: foundFollowUp.user.email,
            name: foundFollowUp.profile.name,
            pet: foundFollowUp.pet.name,
            phoneNumber: foundFollowUp.profile.phoneNumber
        }
        
        const date1 = foundFollowUp.followUpDate1
        const date2 = foundFollowUp.followUpDate2
        const date3 = foundFollowUp.followUpDate3


        if(date1 && date2 && date3){
            await sendEmailReminder(data)


            res.status(200).json('Existen tres fechas');  
        } 
        else if(date1 && date2) res.status(200).json('Existen dos fechas');
        else if(date1) res.status(200).json('Existe una fecha');
        else res.status(200).json('No hay fechas registradas');

        // res.status(200).json(date3);
        
    } catch (error) {
        console.log(error);
        res.json(error);
    }   
};

module.exports = {findFollowUp}