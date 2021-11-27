const cartService = require('../services/cartService');
const mypageService = require('../services/mypageService');
const bookService = require('../services/bookService');


exports.getCart = async(req, res) =>{
    const {user_user_id} = req.params;
    const cart_id = await cartService.getCartId([user_user_id]);;
    try{
        const cart = await cartService.getCart([cart_id[0].cart_id]);
        const cartInfo = await cartService.getCartInfo([cart_id[0].cart_id, user_user_id]);
        // const bookInfo = await bookService.getDetail([cart[0].book_id]);
        return res.render('cart',{
            cartInfo:cartInfo,
            cart:cart,
            // book:bookInfo,
            session:user_user_id
        });
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.insertCart = async(req, res) =>{
    const {book_id, book_price, user_user_id} = req.params;
    let date = new Date();
    const quantity = 1;
    try{
        const checkCart = await cartService.checkCart([user_user_id]);
        if(!checkCart){
            cartService.createCart([user_user_id, date]);
        }
        const cartId = await cartService.getCartId([user_user_id]);
        cartService.insertCart([cartId[0].cart_id, book_id, quantity, book_price]);
        res.redirect('/main');
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.getOrderCart = async(req, res) =>{
    const {user_user_id} = req.params;
    const cart_id = await cartService.getCartId([user_user_id]);
    const amount = 0;
    try{
        const cart = await cartService.getCart([cart_id[0].cart_id]);
        const cartInfo = await cartService.getCartInfo([cart_id[0].cart_id, user_user_id]);
        const card = await mypageService.cardInfo([user_user_id]);
        const address = await mypageService.addressInfo([user_user_id]);
        return res.render('orderCart',{
            cartInfo:cartInfo,
            cart:cart,
            card:card,
            address:address,
            amount:amount,
            session:user_user_id
        });
    }catch(err){
        return res.status(500).json(err);
    }
}