const { Users } = require("../db");
const { Op } = require("sequelize");
const bcrypt = require("bcrypt");
const { generateJWT } = require("../../helpers/jwt");
const jwt = require('jsonwebtoken')
const { response } = require("express");
const { transporter } = require("../utils/configNodemailer");



exports.loginUser = async(req, res= response) =>{

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
                msg: 'User or Password is invalid'
            })
        }

        if(!User.isVerified){
            return res.status(400).json({
                ok: false,
                msg: 'Por favor revise su email y confirme su cuenta.'
            })
        }

        const validPassword= bcrypt.compareSync(password,User.password)

        if(!validPassword){
            return res.status(400).json({
                ok: false,
                msg: 'User or Password is invalid'
            })
        }

        const token = await generateJWT(User.id, User.email)

        res.json({
            ok: true,
            id: User.id,
            email,
            rol: User.roleId,
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

    console.log(email)

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

exports.changePassword = async(req, res= response) =>{

    const {email, oldPassword, newPassword}= req.body


    try {
        
        let User= await Users.findOne({
            where:{
                email: email
            }
        })
       
        if(!User){
            return res.status(400).json({
                ok: false,
                msg: 'User or Password is invalid'
            })
        }

        
        const validPassword= bcrypt.compareSync(oldPassword,User.password)

        if(!validPassword){
            return res.status(400).json({
                ok: false,
                msg: 'User or Password is invalid'
            })
        }

        const salt = bcrypt.genSaltSync()

        const hash = bcrypt.hashSync(newPassword, salt)


     await Users.update({
        password: hash,
    }, {
        where: {
            email: email,
        }
    });

      User= await Users.findOne({
        where:{
            email: email
        }
    })

     res.json({
        ok: true,
        User
     })

        
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error connecting to the database'
        })
    }
}

exports.confirmAccount = async(req, res= response) =>{

    const {token} = req.params

    let email = null

    
    try {

        const payload = jwt.verify(token,process.env.SECRET_JWT_SEED)

        if(!payload){
            return res.status(404).json({
                ok:false,
                msg: 'El token es invalido'
            })
        }

       email= payload.email

    await Users.update({
        isVerified: true,
    }, {
        where: {
            email: email,
        }
    });


    return res.redirect('http://localhost:3000/confirmaccount')

        
    } catch (error) {
        console.log(error)
    }
}

exports.forgotPassword = async(req, res=response) =>{
    try {
        const email= req.query.email

        const User= await Users.findOne({
            where:{
                email: email
            }
        })

        if(!User){
            return res.status(400).json({
                ok: false,
                msg: `No existe un usuario con el email ${email}`
            })
        }

        const token = await generateJWT(User.id, User.email)

        const urlConfirm = `http://localhost:3000/resetpassword/${token}`

        await transporter.sendMail({
          from: process.env.EMAIL,
          to: User.email,
          subject: "Restablecer cuenta",
          html: `<p>Para resetear su contraseña haga click aqui <a href="${urlConfirm}">Resetear Password</a></p>`
        })
       
        res.status(200).send({
            ok: true,
            msg: 'Por favor revise su email.'
         });


    } catch (error) {
        console.log(error)
    }
}

exports.resetPassword = async( req, res= response) =>{
    const {token, password}= req.body


    try {

        const payload = jwt.verify(token,process.env.SECRET_JWT_SEED)
    
        if(!payload){
            return res.status(404).json({
                ok:false,
                msg: 'El token ha expirado o es invalido, realice nuevamente el procedimiento'
            })
        }
      const email= payload.email

        const salt = bcrypt.genSaltSync()

        const hash = bcrypt.hashSync(password, salt)
        
        await Users.update({
            password: hash,
        }, {
            where: {
                email: email,
            }
        });
    
        const  User= await Users.findOne({
            where:{
                email: email
            }
        })
 
     res.json({
        ok: true,
        User
     })

        
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error connecting to the database'
        })
    }
}

exports.checkUserGoogle = async(req, res=response) =>{
    try {
        
        const {email} = req.body

        const User= await Users.findOne({
            where:{
                email: email
            }
        })

        if(!User){
            return res.status(400).json({
                ok: false,
                msg: `No existe un usuario con el email ${email}, lo invitamos a realizar el registro.`
            })
        }

        if(!User.isVerified){
            return res.status(400).json({
                ok: false,
                msg: 'Por favor revise su email y culmine el registro.'
            })
        }

        const token = await generateJWT(User.id, User.email)

        res.json({
            ok: true,
            id: User.id,
            email,
            rol: User.roleId,
            token
            
        })


    } catch (error) {
        console.log(error)
    }
}