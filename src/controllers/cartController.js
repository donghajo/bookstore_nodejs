const { render } = require('ejs');
const cartService = require('../services/cartService');

exports.getCart = async(req, res) =>{
    const {user_user_id} = req.params;
    try{
        const cart = cartService.getCart(user_user_id);
        const cartInfo = cartService.getCartInfo(cart_id, user_user_id);
        return render('cart',{
            cartInfo:cartInfo,
            cart:cart,
            session:user_user_id
        });
    }catch(err){
        return res.status(500).json(err);
    }
}


// insert -> 장바구니 생성일자, 번호까지 같이 생성되게 + 
exports.insertCart = async(req, res) =>{
    const {book_id, book_name, book_quantity, book_price} = req.body;
    const {user_user_id} = req.params;
    try{
        cartService.insertCart([book_id, book_name, book_quantity, book_price, user_user_id]);
        res.redirect('/cart/'+user_user_id);
    }catch(err){
        return res.status(500).json(err);
    }
}