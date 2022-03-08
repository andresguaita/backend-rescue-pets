const express = require('express')
const {Countries,States,Cities,Shelter} = require('../db.js') 

const router = express.Router()

const getCountry = require('../controllers/getCountry.js')


router.get('/country', getCountry);

router.get('/CountryShelter', async (req,res)=>{
    const countryShelter = await Countries.findAll({
        include: [
            {
              model: States,        
            
            } ]
    });
    if (countryShelter){
      res.status(200).send(countryShelter)
    } else {
        res.status(400).json('No se encuentran Datos')
    }
  })


module.exports = router