const {Adoptions,Requests} = require('../db')

exports.setFormStatus = async (req, res) => {
   let {status,formId,id} = req.body;
   
   try {   
       let adop = await Adoptions.update({
           status:status
       },
           {where: 
           {id: id,
           formId:formId 
           }
       });
       let req = await Requests.update({
           status:status
       },
           {where: 
           {id: id,
           formId:formId 
           }
       });
       if(adop)return res.status(200).json(adop);
       if(req)return res.status(200).json(req);
       else return res.status(200).json("Form not edited");
   } catch (error) {
       console.log(error);
      return  res.json(error);
   }   
};