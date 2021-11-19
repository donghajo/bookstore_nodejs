const cartQuery = require('../queries/cartQuery');
const database = require('../../database/database');

exports.getCart = async(req,res)=>{
    try{
        const cart = database.query(cartQuery.getCart(req));
        return cart[0];
    }catch(err){
        return res.status(500).json(err);
    }
}
exports.getCartInfo = async(req,res)=>{
    try{
        const cartInfo = database.query(cartQuery.getCartInfo(req));
        return cartInfo[0];
    }catch(err){
        return res.status(500).json(err);
    }
}