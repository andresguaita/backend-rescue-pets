const {Roles } = require("../db");
const express = require('express')
const router = express.Router()

const postRole = require('../controllers/postRole')
router.post('/roles',postRole);


router.get('/roles', async (req,res)=>{
    let allRoles = await Roles.findAll();
    if (allRoles){
        res.status(200).send(allRoles)
    } else {
        res.status(400).json('Sorry, there is no roles')
    }
});

module.exports = router