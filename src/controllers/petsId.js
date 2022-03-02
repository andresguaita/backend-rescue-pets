const {getAllPetsinDB}=require ('./getAllPetsinDB')
    
    exports.petsId = async(req,res)=>{  
        const { idPets } = req.params;

    const AllPets = await getAllPetsinDB();
  
    if (idPets) {
      let petId = AllPets.filter((e) => e.id == idPets);
      petId.length
        ? res.status(200).json(petId)
        : res.status(404).send("Pet Not Found");
    }
  }
