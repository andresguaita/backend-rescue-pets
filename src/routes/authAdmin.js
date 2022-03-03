const {Router} = require('express');
const { loginAdmin, revalidateToken } = require('../controllers/authAdmin');
const { validateJWT } = require('../middleware/validate-token');
const router = Router();


router.post('/loginadmin', loginAdmin);
router.get('/renew', validateJWT ,revalidateToken);


module.exports = router;