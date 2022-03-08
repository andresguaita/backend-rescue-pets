const {Router} = require('express');
const { createAdmin, editShelter, getAllAdmin, deleteAdmin } = require('../controllers/createAdmin');
const { validateJWT } = require('../middleware/validate-token');
const router = Router();


router.post('/CreateAdmin', createAdmin);
router.put('/editShelter', editShelter);
router.get('/allAdmin',getAllAdmin)
router.delete('/deleteAdmin/:id', validateJWT ,deleteAdmin)

module.exports = router;