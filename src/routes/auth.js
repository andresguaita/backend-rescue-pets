const {Router} = require('express');
const { loginUser, revalidateToken, changePassword, confirmAccount, forgotPassword, resetPassword } = require('../controllers/auth');
const { validateJWT } = require('../middleware/validate-token');
const router = Router();


router.post('/login', loginUser);
router.get('/renew', validateJWT ,revalidateToken);
router.put('/changepassword', validateJWT ,changePassword);
router.get('/confirm/:token', confirmAccount)
router.get('/forgotpassword', forgotPassword)
router.put('/resetpassword' ,resetPassword);
router.put('/changepassword', validateJWT ,changePassword);

module.exports = router;