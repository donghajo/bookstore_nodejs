const router = require('express').Router();
const mypageController = require('../controllers/mypageController');


router.get('/myPage/:user_user_id', mypageController.getMypage);

router.get('/myPage/card/insert/:user_user_id', mypageController.getCardInsert);
router.get('/myPage/card/update/:user_user_id/:card_id', mypageController.getCardUpdate);
router.post('/myPage/card/insert/:user_user_id', mypageController.cardInsert);
router.post('/myPage/card/delete/:user_user_id/:card_id', mypageController.deleteCard);
router.post('/myPage/card/update/:user_user_id/:card_id', mypageController.updateCard);


router.get('/myPage/address/insert/:user_user_id', mypageController.getAddressInsert);
router.get('/myPage/address/update/:user_user_id/:zipCode', mypageController.getAddressUpdate);
router.post('/myPage/address/insert/:user_user_id', mypageController.addressInsert);
router.post('/myPage/address/delete/:user_user_id/:zipCode', mypageController.deleteAddress);
router.post('/myPage/address/update/:user_user_id/:zipCode', mypageController.updateAddress);

module.exports = router;
