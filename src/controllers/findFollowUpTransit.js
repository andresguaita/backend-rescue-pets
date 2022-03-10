const {FollowUpTransit ,Profiles, Users } = require('../db')
const {sendEmailReminder} = require('../controllers/sendEmailReminder')

 async function findFollowUpTransit (req, res) {
    let {transitId, date} = req.body;
    try {   
        const foundTransit = await FollowUpTransit.findOne({
            where: {
                id: transitId
            },
            include: [Profiles, Users]
        });

        // const data = {
        //     email: foundTransit.user.email,
        //     name: foundTransit.profile.name,
        //     pet: foundTransit.pet.name,
        //     phoneNumber: foundTransit.profile.phoneNumber
        // }
        
        //     await sendEmailReminder(data, date)

        console.log("foundTransit.user.email------------------->",foundTransit.user.email)
        console.log("foundTransit.profile.name------------------->",foundTransit.profile.name)
        // console.log("foundTransit.pet.name------------------->",foundTransit.pet.name)
        console.log("foundTransit.profile.phoneNumber------------------->",foundTransit.profile.phoneNumber)
            res.status(200).json('Email reminder sent successfully');  
        
    } catch (error) {
        console.log(error);
        res.json(error);
    }   
};

module.exports = {findFollowUpTransit}