const bookService = require('../services/bookService');

exports.getMain = async(req, res) =>{
    try{
        const rows = await bookService.getMain();
        const session = req.session.user_id;
        return res.render('main', {
            rows:rows,
            session:session
        });
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.getInsert = async(req, res)=>{
    return res.render('insert');
}
exports.bookInsert = async(req, res) =>{
    const data = [req.body.book_name, req.body.book_quantity, req.body.book_price];
    try{
        bookService.bookInsert(data);
        res.redirect('/main');
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.getDetail = async(req, res) =>{
    const id = req.params.book_id;
    try{
        const rows = await bookService.getDetail([id]);
        const session = req.session.user_id;
        return res.render('bookDetail', {
            rows:rows[0],
            session:session
        });
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.bookDelete = async(req, res) =>{
    const book_id = req.params.book_id;
    try{
        bookService.bookDelete(book_id);
        return res.redirect('/main');
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.getUpdate = async(req, res) =>{
    const {book_id} = req.params;
    const session = req.session;

    try{
        const rows = await bookService.getDetail(book_id);;
        return res.render('bookUpdate',{
            rows:rows,
            session:session
        });
    }catch(err){
        return res.status(500).json(err);
    }
   
}
exports.bookUpdate = async(req, res) =>{
    const {book_id} = req.params;
    const {book_name, book_quantity, book_price} = req.body;
    try{
        await bookService.bookUpdate([book_name, book_quantity, book_price, book_id]);
        return res.redirect('/book/'+book_id);
    }catch(err){
        return res.status(500).json(err);
    }

}
