const router = require('express').Router();
const orderController = require('../controllers/orderController');

router.get('/order/:user_id', orderController.orderPage);
router.post('/order/:user_id', orderController.orderItem);