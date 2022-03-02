const {Shelter, Pets, Users, FollowUp} = require('../db.js') 
  
  const getAllShelterInDB= async () => {
      return await Shelter.findAll({
        include: [
          {
            model: Pets,
            attributes: ["name"],
          }, ]
      });
    };
  
    module.exports = { getAllShelterInDB};
  