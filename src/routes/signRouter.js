var router = require('express').Router();
const app = require('../../app');
const signController = require('../controllers/signController');

//signIn page
router.get('/signIn', signController.getSignIn);
//signIn 
router.post('/', signController.signIn);

//signup page
router.get('/signUp', signController.getSignUp);
//signup
router.post('/signUp', signController.signUp);

router.get('/main', signController.getMain);

module.exports = router;
