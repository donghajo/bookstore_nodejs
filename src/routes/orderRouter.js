const router = require('express').Router();
const orderController = require('../controllers/orderController');

router.get('/order/:book_id/:user_user_id', orderController.orderPage);
router.post('/order/:book_id', orderController.orderSingleItem);

router.get('/orderList/:book_id/:user_id', orderController.getOrderList);
router.get('/orderDetail/:user_id', orderController.getOrderDetail);

module.exports = router;