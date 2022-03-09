const {Router} = require('express');
const { createAdmin, editShelter, getAllAdmin, deleteAdmin, getAllDonations } = require('../controllers/createAdmin');
const { validateJWT } = require('../middleware/validate-token');
const router = Router();


router.post('/CreateAdmin', createAdmin);
router.put('/editShelter', editShelter);
router.get('/allAdmin',getAllAdmin)
router.get('/allDonations',getAllDonations)
router.delete('/deleteAdmin/:id', validateJWT ,deleteAdmin)

module.exports = router;