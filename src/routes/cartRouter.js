const router = require('express').Router();
const cartController = require('../controllers/cartController');

router.get('/cart/:user_user_id', cartController.getCart);
router.post('/insert/:book_id/:book_price/:user_user_id', cartController.insertCart);
router.get('/cart/order/:user_user_id', cartController.getOrderCart);



module.exports=router;
