const {Pets,Shelter,Age, Temperament,
    Species, PetStatus, Vaccines} = require('../db.js') 
  
  const getAllPetsinDB= async () => {
      return await Pets.findAll({
        include: [
          {
            model: Age,
            attributes: ["age"],
          },
          {
            model: Temperament,
            attributes: ["temperament"], 
          },
           {
               model: Vaccines,
              attributes: ["name"], 
            },
            {
              model: Species,
              attributes: ["specie"], 
            },
            {
              model: PetStatus,
              attributes: ["status"],
            },
            {
              model: Shelter,
              attributes: (["name"])
            },
        ],
      });
    };
  
    module.exports = { getAllPetsinDB};
  