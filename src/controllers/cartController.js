const cartService = require('../services/cartService');
const mypageService = require('../services/mypageService');
const bookService = require('../services/bookService');


exports.getCart = async(req, res) =>{
    const {user_user_id} = req.params;
    const cart_id = await cartService.getCartId([user_user_id]);;
    try{
        const cart = await cartService.getCart([cart_id[0].cart_id]);
        console.log("pass", cart);
        const cartInfo = await cartService.cartInformation([cart_id[0].cart_id, user_user_id]);
        console.log("pass");
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
            // const cart_id = Math.random()*100000000000000000;
            cartService.createCart([user_user_id, date]);
            const cartId = await cartService.getCartId([user_user_id]);
            await cartService.insertCart([cartId[0].cart_id, book_id, quantity, book_price]);
            res.redirect('/main');
        }else{
            const cartId = await cartService.getCartId([user_user_id]);
            await cartService.insertCart([cartId[0].cart_id, book_id, quantity, book_price]);
            res.redirect('/main');
        }
        
        
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.getOrderCartPage = async(req, res) =>{
    const user_user_id = req.session.user_id;
    try{
        const cart_id = await cartService.getCartId([user_user_id]);
        const book_info = await cartService.getCartInfo([cart_id[0].cart_id]);
        const card_info = await mypageService.cardInfo([user_user_id]);
        const address_info = await mypageService.addressInfo([user_user_id]);
        return res.render('orderCart',{
            book_info:book_info,
            card_info:card_info,
            address_info:address_info,
            session:user_user_id
        });
    }catch(err){
        console.log(err);
        return res.status(500).json(err);
    }
}
