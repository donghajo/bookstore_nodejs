const bookService = require('../services/bookService');

exports.getMain = async(req, res) =>{
    try{
        const rows = await bookService.getMain();
        return res.render('main', {
            rows:rows,
            session:req.session.user_id
        });
    }catch(err){
        return res.status(500).json(err);
    }
}

// exports.getInsert = async(req, res)=>{
//     return res.render('insert');
// }
// exports.bookInsert = async(req, res) =>{
//     const data = [req.body.book_name, req.body.book_quantity, req.body.book_price];
//     try{
//         bookService.bookInsert(data);
//         res.redirect('/main');
//     }catch(err){
//         return res.status(500).json(err);
//     }
// }

exports.getDetail = async(req, res) =>{
    const id = req.params.book_id;
    try{
        const rows = await bookService.getDetail([id]);
        console.log(rows);
        return res.render('bookDetail', {rows:rows[0]});
    }catch(err){
        return res.status(500).json(err);
    }
}

// exports.bookDelete = async(req, res) =>{
//     //여기까지 --- > id값 받아와야함
//     const id = req.body.book_id;
//     console.log("id : ", id);
//     try{
//         bookService.bookDelete(id);
//         return res.redirect('/main');
//     }catch(err){
//         return res.status(500),json(err);
//     }
// }