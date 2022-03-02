const {Router} = require('express');
const { createAdmin } = require('../controllers/createAdmin');
const router = Router();


router.post('/CreateAdmin', createAdmin);


module.exports = router;