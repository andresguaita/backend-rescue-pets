const {Router} = require('express');
const { createAdmin, editShelter } = require('../controllers/createAdmin');
const router = Router();


router.post('/CreateAdmin', createAdmin);


router.put('/editShelter', editShelter);

module.exports = router;