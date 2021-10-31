var router = require('express').Router();
const signController = require('../controllers/signController');


//login page
router.get('/login', signController.getLogin);
//login
router.post('/', signController.login);

//signup page
router.get('/signup', signController.getSignup);
//signup
router.post('/signup', signController.signup);

module.exports = router;
