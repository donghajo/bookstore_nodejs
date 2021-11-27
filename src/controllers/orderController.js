const orderService = require('../services/orderService');
const mypageService = require('../services/mypageService');
const bookService = require('../services/bookService');


exports.orderPage = async(req, res) => {
    const {book_id} = req.params;
    const session = req.session.user_id;
    try{
        const rows = await bookService.getDetail([book_id]);

        const book_info = await bookService.getDetail(book_id);
        const card_info = await mypageService.cardInfo([session]);
        const address_info = await mypageService.addressInfo([session]);
        return res.render('order', {
            rows:rows[0],
            card_info:card_info,
            book_info:book_info,
            address_info:address_info,
            session:session
        });
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.order = async(req, res, next) => {
   const {book_price, card_id, address_id, books_id, count} = req.body;
   try{
        const user = req.session.user_id;
        const order_id = String(Math.random()*100000000000000000);
        const order_date = new Date();
        let order_amount = book_price * count;
        let card_info = await mypageService.cardDetail([card_id]);
        let addr_info = await mypageService.addressDetail([address_id]);

        let card = card_info[0]
        let addr = addr_info[0]
        let card_kind = card.card_kind
        let card_exp = card.card_expiredate
        let address_zipcode = addr.zipCode
        let address_default = addr.address_default
        let address_detail = addr.address_detail
        console.log("pass");
        await orderService.orderItem([order_id, order_date, order_amount, card_id, card_kind, card_exp, address_zipcode, address_default, address_detail, user]);
        console.log("itempass");
        await orderService.addOrderList([order_id, books_id, count])
        console.log("listpass");
        await orderService.minusBookCount([count, books_id]);
        console.log("minuspass");
        return res.send(`<script type="text/javascript">
        alert("주문이 완료되었습니다."); 
        location.href='./order/orderList';
        </script>`);
   }catch(err){
       console.log(err);
        return res.status(500).json(err);
   }
}


exports.purchase = async(req,res,next) =>{
    const user = req.session
}
exports.getOrderList = async(req, res) => {
    try{
        const session = req.session.user_id;
        const order_info = await orderService.selectOrder([session]);
        return res.render('orderList', {
            session:session,
            order_info:order_info
        });
    }catch(err){
        return res.status(500).json(error);
    }
    
}

exports.getOrderDetail = async(req, res) =>{
    return res.render('orderDetail');
}