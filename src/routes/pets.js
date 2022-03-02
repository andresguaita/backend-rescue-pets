const express = require("express");
const { addPet } = require("../controllers/addPet.js");
const router = express.Router();
const { petsIdShelter } = require("../controllers/petsidshelters.js");
const { getPets } = require("../controllers/getPets.js");
const { filterTemperament } = require("../controllers/filterTemperament.js");
const { postVaccines } = require("../controllers/petsVaccines");
const {petsId}= require("../controllers/petsId");
const { getAllPetsinDB } = require("../controllers/getAllPetsinDB.js");
const { deletePet } = require("../controllers/deletePet");
const { editPet } = require("../controllers/editPets");
const { getAllPetAdopted } = require("../controllers/getAllPetsAdopted.js");
const {Shelter, Pets} = require('../db.js') 

router.get("/pets/:idCity", getPets);

// router.get("/pets/:idShelter", petsIdShelter);

router.post("/pets", addPet);

// router.get("/pets/:idTemperament", filterTemperament);

router.post("/postVaccines", postVaccines);

router.get('/petDetail/:idPets',petsId )

router.get("/petDetail", async (req, res) => {

  const {shelterId} = req.query
  let allPets = await getAllPetsinDB();

  if (shelterId){
    const filter = allPets.filter(e => e.shelterId == shelterId)

    if (filter) {
      res.status(200).send(filter)
    } else{
      res.status(400).json('Sorry, there is no pets is this shelter')
    }
  }
  else {

    if (allPets.length > 0) {
      res.status(200).send(allPets);
    } else {
      res.status(400).json("Sorry,pet not found");
    }
  }

   
  });



  

  router.delete("/pets/:petId", deletePet);
  router.put("/pets/:petId", editPet);

 
  router.get("/petAdopted/:id", getAllPetAdopted)

  router.get('/countshelter', async (req,res)=>{
    const {count, rows} = await Shelter.findAndCountAll();
    if (count){
        res.status(200).send({count})
    } else {
        res.status(400).json('Sorry, there is no Shelters')
    }
  });

  router.get('/petAdopted2', async (req,res)=>{
    const {count, rows} = await Pets.findAndCountAll({
          where:{
                    petStatusId: 2
                }
    });
    if (count){
      res.status(200).send({count})
    } else {
        res.status(400).json('Sorry, there is no Adoptados')
    }
  })

  router.get('/petAdopted3', async (req,res)=>{
    const {count, rows} = await Pets.findAndCountAll({
          where:{
                    petStatusId: 3
                }
    });
    if (count){
      res.status(200).send({count})
    } else {
        res.status(400).json('Sorry, there is no Adoptados')
    }
  })

module.exports = router;
