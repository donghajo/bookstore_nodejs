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

//signOut
router.post('/signOut', signController.signOut);

//main page
router.get('/main', signController.getMain);

//유지
router.get('/signIn', signController.maintain);

module.exports = router;
