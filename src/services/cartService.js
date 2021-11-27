const cartQuery = require('../queries/cartQuery');
const database = require('../../database/database');

exports.getCart = async(req,res)=>{
    try{
        const cart = await database.query(cartQuery.getCart, req);
        return cart[0];
    }catch(err){
        return res.status(500).json(err);
    }
}
exports.getCartInfo = async(req,res)=>{
    try{
        const cartInfo = await database.query(cartQuery.getCartInfo, req);
        return cartInfo[0];
    }catch(err){
        throw Error(err);
    }
}


exports.insertCart = async(req,res)=>{
    try{
        database.query(cartQuery.insertCart, req);
    }catch(err){
        throw Error(err);
    }
}
exports.checkCart = async(req,res)=>{
    try{
        const checkCart = database.query(cartQuery.checkCart, req);
        return checkCart;
    }catch(err){
        throw Error(err);
    }
}
exports.createCart = async(req, res)=>{
    try{
        database.query(cartQuery.createCart, [req]);
        return;
    }catch(err){
        throw Error(err);
    }
}
exports.getCartId = async(req, res) =>{
    try{
        const cart = await database.query(cartQuery.checkCart, req);
        console.log("bye : ", cart[0]);
        return cart[0];
    }catch(err){
        throw Error(err);
    }
}