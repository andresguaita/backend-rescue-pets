const express = require('express');
const { getAllShelterInDB } = require('../controllers/getAllShelterInDB');
const { getSheltersById, updateShelter } = require('../controllers/getShelter');
const { validateJWT } = require('../middleware/validate-token');
const router = express.Router()



router.get('/Shelter/:id', validateJWT,getSheltersById );
router.put('/Shelter/:id',validateJWT ,updateShelter );



router.get("/shelters", async (req, res) => {

    let allShelters = await getAllShelterInDB();
  
  
      if (allShelters) {
        res.status(200).send(allShelters)
      } else{
        res.status(400).json('Sorry, there is no shelters')
      }

    })


module.exports = router
