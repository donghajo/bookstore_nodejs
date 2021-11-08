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
router.post('/delete/:book_id', bookController.bookDelete);

//update
router.get('/book/update/:book_id', bookController.getUpdate);
router.post('/book/update/:book_id', bookController.bookUpdate);

module.exports = router;