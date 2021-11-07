var router = require('express').Router();
const signController = require('../controllers/signController');

//signIn page
router.get('/signIn', signController.getSignIn);
//signIn 
router.post('/', signController.signIn);

//signup page
router.get('/signUp', signController.getSignUp);
//signup
router.post('/signUp', signController.signUp);

//signOut
router.get('/signOut', signController.signOut);


module.exports = router;