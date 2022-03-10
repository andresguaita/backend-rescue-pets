const { Shelter, Users, Transaction} = require("../db");
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

        const urlConfirm = `${process.env.URL_FRONT}/resetpassword/${token}`

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





const getAllAdmin =  async(req, res= response) => {

    

    try {
        let allAdmin = await Users.findAll({
            where: {
                roleId: [2,3]
            }
        })

        res.json({
            ok:true,
            allAdmin
        })
        
    } catch (error) {
        console.log(error)
    }
    
}

const deleteAdmin =  async(req, res= response) => {

    const {id} = req.params
    const Userid= req.id
    

   

    try {
        let User = await Users.findOne({
            where: {
                id: id
            }
        })

        let UserRole = await Users.findOne({
            where: {
                id: Userid
            }
        })
        
        if(UserRole.roleId!=3){

          return  res.json({
                ok: false,
                msg: 'Usted no tiene permiso para realizar esta accion'
            })
           
        }
        
          await User.destroy();
          return res.json({
            ok:true,
            msg: 'Cuenta administrativa eliminada exitosamente'
        })
        
    } catch (error) {
        console.log(error)
    }
    
}

const getAllDonations =  async(req, res= response) => {

    try {
        let allDonations = await Transaction.findAll({
            include: [
                {
                  model: Shelter,
                  attributes: ["name"],
                },
              ],
        })

        res.json({
            ok:true,
            allDonations
        })
        
    } catch (error) {
        console.log(error)
    }
    
}
      



module.exports = {
    createAdmin,
    editShelter,
    getAllAdmin,
    deleteAdmin,
    getAllDonations
}
