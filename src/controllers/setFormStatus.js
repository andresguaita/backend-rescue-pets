const {Adoptions,Requests} = require('../db')

exports.setFormStatus = async (req, res) => {
   let {status,formId,id} = req.body;
   
   try {   
       await Adoptions.update({
           status:status
       },
           {where: 
           {id: id,
           formId:formId 
           }
       });
       await Requests.update({
           status:status
       },
           {where: 
           {id: id,
           formId:formId 
           }
       });
      return res.status(200).json("Form edited successfully");
   } catch (error) {
       console.log(error);
      return  res.json(error);
   }   
};