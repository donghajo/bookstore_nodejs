const orderService = require('../services/orderService');
const mypageService = require('../services/mypageService');
const bookService = require('../services/bookService');


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

exports.orderSingleItem = async(req, res) => {
    const {book_id} = req.params.book_id;
    const {session} = req.session;
    const count = [req.body.amount];
    try{
        const cardInfo = mypageService.cardInfo(session);
        const addressInfo = mypageService.addressInfo(session);

        for(let i = 0; i <count.length; i++){
            if(count[i]<=0){
                res.send('<script type="text/javascript">alert("도서 수량을 똑바로 적어주세요.");</script>');
                return err;
            }
        }


    }catch(err){
        return res.status(500).json(err);
    }
}

exports.getOrderList = async(req, res) => {
    
}

exports.getOrderDetail = async(req, res) =>{

}