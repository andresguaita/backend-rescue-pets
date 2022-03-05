const { Shelter, Users, Cities, Countries, Roles, States } = require("../db");
const { Op } = require("sequelize");
const bcrypt = require("bcrypt");
var sequelize = require("sequelize");
const { generateJWT } = require("../../helpers/jwt");
const jwt = require('jsonwebtoken')
const { response } = require("express");
const { transporter } = require("../utils/configNodemailer");



async function createAdmin(req, res=response) {

    try {
        const { email, password, roleId, userRole } = req.body;

        if(userRole!=3){
            return res.status(404).json({
                ok:false,
                msg: 'Solo los superadmin pueden crear cuentas superadmin'
            })
        }

        let User= await Users.findOne({
            where:{
                email: email
            }
        })

        if(User){
            return res.status(401).json({
                ok:false,
                msg: `Ya existe una cuenta de administrador con el email ${email}`
            })
        }


        const salt = bcrypt.genSaltSync()
       
        const hash = bcrypt.hashSync(password, salt)

         User =  await Users.create({
             email: email,
             password : hash,
             isVerified: true,
             roleId: roleId
         });

        res.status(201).send({
            ok: true,
            msg: 'Cuenta administrativa creada con exito',
           User           
         });

    } catch (error) {
        res.json('Error en el Catch.');
        console.log(error);

    }

  } 

  const editShelter =  async(req, res= response) => {


    try {
        
      const {email, status ,id}= req.body
  
    
  
      await Shelter.update({
        status: status,
    }, {
        where: {
            userId: id,
        }
    });
  
    let User= await Users.findOne({
        where:{
            id: id
        }
    })

    if(User.email!=email){
        await Users.update({
            email: email,
        }, {
            where: {
                id: id,
            }
        });

        let User= await Users.findOne({
            where:{
                email: email
            }
        })

        const token = await generateJWT(User.id, User.email)

        const urlConfirm = `http://localhost:3000/resetpassword/${token}`

        await transporter.sendMail({
          from: process.env.EMAIL,
          to: User.email,
          subject: "Restablecer acceso de su cuenta",
          html: `<p>De acuerdo a su solicitud, se ha procedido a cambiar el correo asociado a su cuenta, para terminar el procedimiento lo invitamos a restablecer su contraseña.Para resetear su contraseña haga click aqui <a href="${urlConfirm}">Resetear Password</a></p>`
        })
    }
  

  res.json({
      ok:true,
      msg: 'Actualizado correctamente'
  })
     
  
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
  };

module.exports = {
    createAdmin,
    editShelter
}
