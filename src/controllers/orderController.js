const orderService = require('../services/orderService');
const mypageService = require('../services/mypageService');
const bookService = require('../services/bookService');
const { NotExtended } = require('http-errors');


exports.orderPage = async(req, res) => {
    const {book_id} = req.params;
    const session = req.session.user_id;
    console.log(session);
    try{
        const rows = await bookService.getDetail([book_id]);
        const card = await mypageService.cardInfo([session]);
        const address = await mypageService.addressInfo([session]);
        return res.render('order', {
            rows:rows[0],
            card:card,
            address:address,
            session:session
        });
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.orderSingleItem = async(req, res, next) => {
    const {book_id} = req.params.book_id;
    const {session} = req.session;
    const count = [req.body.amount];
    try{
        const cardInfo = await mypageService.cardInfo(session);
        const addressInfo = await mypageService.addressInfo(session);
        const orderBook = await bookService.getDetail(session);
        for(let i = 0; i <count.length; i++){
            if(count[i]<=0){
                res.send('<script type="text/javascript">alert("도서 수량을 똑바로 적어주세요.");</script>');
                return err;
            }
        }
        req.body.cardInfo = cardInfo;
        req.body.addressInfo = addressInfo;
        req.sesion.orderBook = orderBook;
        req.sesison.count = count;

        next()
    }catch(err){
        return res.status(500).json(err);
    }
}


exports.purchase = async(req,res,next) =>{
    const user = req.session
}
exports.getOrderList = async(req, res) => {
    return res.render('orderList');
}

exports.getOrderDetail = async(req, res) =>{
    return res.render('orderDetail');
}