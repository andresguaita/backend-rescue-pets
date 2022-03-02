const {Vaccines} = require('../db');

exports.postVaccines = async (req, res) => {
    const {name} = req.body;
    try {   
        const searchVaccines = await Vaccines.findOne({
            where: {
                name: name
            }
        });
        if(searchVaccines){
            res.status(200).json(searchVaccines);
        } else {
            const createVaccines = await Vaccines.create({name});

            res.status(200).json(createVaccines);
        };
    } catch (error) {
        console.log(error);
        res.json('Error en el Catch.');
    }   
};

