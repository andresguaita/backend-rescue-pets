const { Users } = require("../db");
const { Op } = require("sequelize");
const bcrypt = require("bcrypt");
const { generateJWT } = require("../../helpers/jwt");
const jwt = require('jsonwebtoken')
const { response } = require("express");
const { transporter } = require("../utils/configNodemailer");



exports.loginAdmin = async(req, res= response) =>{

    const {email, password}= req.body

    try {
        
        const User= await Users.findOne({
            where:{
                email: email
            }
        })

        if(!User){
            return res.status(400).json({
                ok: false,
                msg: 'Usuario o Contraseña no es valida'
            })
        }

        if(User.roleId===1){
            return res.status(400).json({
                ok: false,
                msg: 'No tiene permisos para entrar a esta pagina'
            })
        }


        const validPassword= bcrypt.compareSync(password,User.password)

        if(!validPassword){
            return res.status(400).json({
                ok: false,
                msg: 'Usuario o contraseña no es valida'
            })
        }

        const token = await generateJWT(User.id, User.email)

        res.json({
            ok: true,
            id: User.id,
            email,
            role: User.roleId,
            token
        })
        
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error connecting to the database'
        })
    }
    
}

exports.revalidateToken= async(req, res= response) =>{
    
    const id= req.id
    const email= req.email

    const User= await Users.findOne({
        where:{
            email: email
        }
    })



    const token = await generateJWT(id, email)

    res.json({
        ok: true,
        id,
        email,
        role: User.roleId,
        token
    })
}
