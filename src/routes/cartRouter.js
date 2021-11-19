const router = require('express').Router();
const cartController = require('../controllers/cartController');

router.get('/cart/:user_user_id', cartController.getCart);
router.post('/cart/insert/:user_user_id', cartController.insertCart);




module.exports=router;
