var router = require('express').Router();
const bookController = require('../controllers/bookController');

//main page
router.get('/main', bookController.getMain);

//insert
router.get('/insert', bookController.getInsert);
router.post('/insert', bookController.bookInsert);

//detail page
router.get('/book/:book_id', bookController.getDetail);

//delete
router.post('/book/delete/:book_id', bookController.bookDelete);

module.exports = router;