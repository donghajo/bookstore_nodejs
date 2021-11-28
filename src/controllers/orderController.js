const orderService = require('../services/orderService');
const mypageService = require('../services/mypageService');
const bookService = require('../services/bookService');
const cartService = require('../services/cartService');

exports.orderPage = async(req, res) => {
    const {book_id} = req.params;
    const session = req.session.user_id;
    try{
            const book_info = await bookService.getDetail(book_id);
            const card_info = await mypageService.cardInfo([session]);
            const address_info = await mypageService.addressInfo([session]);
        return res.render('order', {
            card_info:card_info,
            book_info:book_info,
            address_info:address_info,
            session:session
        });        
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.order = async(req, res) => {
   const {book_price, card_id, address_id, book_id, book_count} = req.body;
   try{
        const user = req.session.user_id;
        const order_id = String(Math.random()*100000000000000000);
        let order_date = new Date();
        let order_amount = book_price*book_count;

        // if(book_id.length < 1){
        //     for(let i = 0; i < book_id.lenght; i++){
        //         let price = book_price[i];
        //         let count = book_count[i];
        //         order_amount += price*count;
        //     }
        // }

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
        await orderService.addOrderList([order_id, book_id, book_count, order_amount]);
        console.log("listpass");
        await orderService.minusBookCount([book_count, book_id]);
        console.log("minuspass");
        return res.send(`<script type="text/javascript">
        alert("주문이 완료되었습니다."); 
        location.href='./orderList';
        </script>`);
   }catch(err){
       console.log(err);
        return res.status(500).json(err);
   }
}

exports.getOrderList = async(req, res) => {
    try{
        const session = req.session.user_id;
        console.log(session);
        // const order_id = await orderService.getOrderId([session]);
        const order_info = await orderService.getList([session]);;
        console.log(order_info);
        return res.render('orderList', {
            session:session,
            order_info:order_info
        });
    }catch(err){
        return res.status(500).json(err);
    }
    
}

exports.getOrderDetail = async(req, res) =>{
    return res.render('orderDetail');
}

exports.deleteOrder = async(req) =>{
    const session = req.session.user_id;
    const order_id = req.params.order_id;
    console.log(session, order_id);
    try{
        await orderService.deleteOrder([session, order_id]);
        await orderService.deleteOrderList([order_id]);
        const order_info = await orderService.selectOrder([order_id]);
        await orderService.plusBookCount([order_info[0].book_count, order_info[0].book_id]);
        return res.redirect('/order/orderList/'+session);
    }catch(err){
        return res.status(500).json(err);
    }
}