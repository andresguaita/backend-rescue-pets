const { Roles } = require("../db");

/* exports.postRole =  */ const postRole= async(req, res/* {roleName} */) => {
    try{
        const {roleName} = req.body
        
            let roleCreated = await Roles.create({
                role : roleName,
            })

            res.status(200).json(roleCreated)
        
    }catch(error){
        return error
    }    
};

module.exports = postRole;
