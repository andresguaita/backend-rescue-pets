const { response } = require('express')
const { Countries } = require('../db')
const countries = require('../utils/countries.json')

 const getCountry = async(req, res= response) =>{
    const { id } = req.query

    let data = countries.countries

    data.forEach(element => {
        Countries.findOrCreate({
            where: {
                id : `${element.id}`,
                country: element.name,
                flag: element.flag
            }
        })
    });

    const AllCountries = await Countries.findAll()

    if (id) {
        let countryID = AllCountries.filter((e) =>
          e.id === id
        );
        countryID.length
          ? res.status(200).send(countryID)
          : res.status(404).send("country Not Found");
      } else {
        res.status(200).send(AllCountries);
      }
    
}

module.exports=getCountry