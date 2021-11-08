const { render } = require('ejs');
const cartService = require('../services/cartService');

exports.getCart = async(req, res) =>{
//     const {user_user_id} = req.params;
//     try{
//         const cart = cartService.getCart(user_user_id);
//         return render('cart',{
//             cart:cart,
//             session:user_user_id
//         });
//     }catch(err){
//         return res.status(500).json(err);
//     }
    res.render('cart');
}