const {Shelter} = require('../db');
const {Op} = require('sequelize');

async function searchShelters (req, res)  {
    try {
        const {name} = req.query;
        const searchShelter = await Shelter.findAll({
            where:{
                name: {
                    [Op.iLike] : `%${name}%`
                }
            }
        });
        console.log('searchShelter: ', searchShelter);
        searchShelter.length ? 
        res.status(200).json(searchShelter) :
        res.json({ ok: false, msg:'El refugio que busca no se encuentra,'});
    } catch (error) {
        console.log(error);
        res.json({msg: 'Error en el Catch.'});
    }
};

module.exports = {searchShelters};
