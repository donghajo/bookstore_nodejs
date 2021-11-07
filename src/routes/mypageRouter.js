const router = require('express').Router();
const mypageController = require('../controllers/mypageController');


router.get('/myPage/:user_user_id', mypageController.getMypage);

router.get('/myPage/card/insert/:user_user_id', mypageController.getCardInsert);
router.post('/myPage/card/insert/:user_user_id', mypageController.cardInsert);

router.get('/myPage/address/insert/:user_user_id', mypageController.getAddressInsert);
router.post('/myPage/address/insert/:user_user_id', mypageController.addressInsert);
module.exports = router;
