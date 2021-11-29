const router = require('express').Router();
const orderController = require('../controllers/orderController');

router.get('/order/:book_id', orderController.orderPage);
router.post('/order/orderList/:user_user_id', orderController.order);

router.get('/order/orderList/:user_user_id', orderController.getOrderList);
router.get('/orderDetail/:order_id', orderController.getOrderDetail);

router.post('/order/delete/:order_id', orderController.deleteOrder);

module.exports = router;