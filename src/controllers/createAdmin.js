const { Shelter, Users, Cities, Countries, Roles, States } = require("../db");
const { Op } = require("sequelize");
const bcrypt = require("bcrypt");
var sequelize = require("sequelize");
const { response } = require("express");



async function createAdmin(req, res=response) {

    try {
        const { email, password, roleId, userRole } = req.body;

      

        let User= await Users.findOne({
            where:{
                email: email
            }
        })

        if(User){
            return res.status(401).json({
                ok:false,
                msg: `Ya existe un usuario con el email ${email}`
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
           User
            
         });

    } catch (error) {
        res.json('Error en el Catch.');
        console.log(error);

    }

  } 

module.exports = {
    createAdmin
}
