const { Users,Profiles } = require("../db");


async function CreateProfileUser(req, res) {

    try {
        const { name, lastName, phoneNumber, address, email ,roleId} = req.body;
      
        const userFound = await Users.findOne({
            where: {
                email: email
            }
        })

        if (!userFound){
            const User =  await Users.create({
                email: email,
                password : 123456789,
                roleId: roleId,
                isVerified: false,
            });
   
           const createProfile = await Profiles.create({
               name, lastName, phoneNumber, address, userId : User.id
           });
          
           res.status(201).send({
               ok: true,
               createProfile,
               Userid: User.id,
               email: User.email,
            });
        }
        else {

            const foundProfile = await Profiles.findOne({
                where:{
                    userId: userFound.id
                }
            })
            res.status(200).send({
                ok: true,
                foundProfile,
                Userid: userFound.id,
                email: userFound.email
            })
        }

        

    } catch (error) {
        res.json('Error en el Catch.');
        console.log(error);

    }

  } 


const getAllProfiles = async (req, res) => {
    
    const {id} = req.params

  let all = await Profiles.findAll({
      include:{
          model: Users
      }
     });

     if(id) {
         let profileId = await Profiles.findAll({
             where:{
                 id: id
             },
             include:{
                 model: Users
             }
         })
         res.status(200).json(profileId[0])
     } 
     else {
        res.status(200).json(all)
     }


  };

module.exports = { CreateProfileUser, getAllProfiles };
