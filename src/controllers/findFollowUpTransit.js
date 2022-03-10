const {FollowUpTransit ,Profiles, Users, Shelter } = require('../db')
const {sendEmailTransitAlert} = require('../controllers/sendEmailTransitAlert')

 async function findFollowUpTransit (req, res) {
    let {transitId} = req.body;
    try {   
        const foundTransit = await FollowUpTransit.findOne({
            where: {
                id: transitId
            },
            include: [Profiles, Users]
        });

        const idShelter = foundTransit.shelterId


        const foundShelterName = await Shelter.findOne({
            where: {
                id: idShelter
            }});

        const shelterName = foundShelterName.name
            // console.log("foundShelterName-------------->", foundShelterName.name)

        const data = {
            email: foundTransit.user.email,
            name: foundTransit.profile.name,
            // pet: foundTransit.pet.name,
            phoneNumber: foundTransit.profile.phoneNumber,
            shelterName: shelterName
        }
        console.log("data-------------->", data)

        await sendEmailTransitAlert(data)

        // console.log("data------------------->",data)
        // console.log("foundTransit.profile.name------------------->",foundTransit.profile.name)
        // console.log("foundTransit.pet.name------------------->",foundTransit.pet.name)
        // console.log("foundTransit.profile.phoneNumber------------------->",foundTransit.profile.phoneNumber)
            res.status(200).json('Email reminder sent successfully');  
        
    } catch (error) {
        console.log(error);
        res.json(error);
    }   
};

module.exports = {findFollowUpTransit}