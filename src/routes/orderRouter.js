const router = require('express').Router();
const orderController = require('../controllers/orderController');

router.get('/order/:book_id/:user_user_id', orderController.orderPage);
router.post('/order/orderList', orderController.order);

router.get('/order/orderList', orderController.getOrderList);
router.get('/orderDetail/:user_id', orderController.getOrderDetail);

module.exports = router;