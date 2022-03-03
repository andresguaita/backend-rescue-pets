const {Adoptions,Requests} = require('../db')

exports.setFormStatus = async (req, res) => {
   let {status,formId,id} = req.body;
   
   try {   
       let adop = await Adoptions.findAll({
           where:{
               id
           }
       })
       if(adop)return res.status(200).json(adop)
       else return res.status(200).json("Form not edited");
   } catch (error) {
       console.log(error);
      return  res.json(error);
   }   
};