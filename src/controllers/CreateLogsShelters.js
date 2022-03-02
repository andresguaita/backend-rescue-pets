const { Shelter, Users, Cities, Countries, Roles, States } = require("../db");
const { Op } = require("sequelize");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const { generateJWT } = require("../../helpers/jwt");
var sequelize = require("sequelize");
const { transporter } = require("../utils/configNodemailer");
async function createShelter(req, res) {

    try {
        const { name, phoneNumber, description, address, email, password ,cityId,  role, img } = req.body;
      

        const errors= validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).json({
                ok: false,
                errors : errors.mapped()
            })
        }

        const salt = bcrypt.genSaltSync()

       
        const hash = bcrypt.hashSync(password, salt)

        const User =  await Users.create({
             email: email,
             password : hash,
             isVerified: false,
             roleId: role
         });


         const token = await generateJWT(User.id, User.email)

        const createShelter = await Shelter.create({
            name, address, phoneNumber, description, userId : User.id , cityId, img
        });

        const urlConfirm = `${process.env.APIGATEWAY_URL}/confirm/${token}`

        await transporter.sendMail({
          from: process.env.EMAIL,
          to: User.email,
          subject: "Por favor confirme su cuenta",
          html: `<p>Por favor confirme su cuenta <a href="${urlConfirm}">Confirmar</a></p>`
        })
       
        res.status(201).send({
            ok: true,
            createShelter,
            id: User.id,
            email: User.email,
            token
         });

    } catch (error) {
        res.json('Error en el Catch.');
        console.log(error);

    }

  } 


const getAllShelters = async () => {
  return await Shelter.findAll({  
    include: {
        model: Cities,
        include: {
            model: States,
            include: Countries
        }
      }
     });
  };

module.exports = { createShelter, getAllShelters };
