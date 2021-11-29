const cartQuery = require('../queries/cartQuery');
const database = require('../../database/database');
const { data } = require('jquery');

exports.getCart = async(req,res)=>{
    try{
        const cart = await database.query(cartQuery.getCart, req);
        return cart[0];
    }catch(err){
        return res.status(500).json(err);
    }
}
exports.getCartInfo = async(req)=>{
    try{
        const cartInfo = await database.query(cartQuery.getCartInfo, req);
        return cartInfo[0];
    }catch(err){
        throw Error(err);
    }
}


exports.insertCart = async(req)=>{
    try{
        database.query(cartQuery.insertCart, req);
    }catch(err){
        throw Error(err);
    }
}
exports.checkCart = async(req)=>{
    try{
        const checkCart = database.query(cartQuery.checkCart, req);
        return checkCart;
    }catch(err){
        throw Error(err);
    }
}
exports.createCart = async(req)=>{
    try{
        database.query(cartQuery.createCart, [req]);
        return;
    }catch(err){
        throw Error(err);
    }
}
exports.getCartId = async(req) =>{
    try{
        const cart = await database.query(cartQuery.checkCart, req);
        return cart[0];
    }catch(err){
        throw Error(err);
    }
}
exports.cartInformation = async(req)=>{
    try{
        const cartInfo = await database.query(cartQuery.cartInformation, req);
        return cartInfo[0];
    }catch(err){
        throw Error(err);
    }
}

exports.deleteLine = async(req) => {
    try{
        await database.query(cartQuery.deleteLine, req);
    }catch(err){
        throw Error(err);
    }
}


exports.deleteLineAll = async(req) => {
    try{
        await database.query(cartQuery.deleteLineAll, req);
    }catch(err){
        throw Error(err);
    }
}

exports.deleteCart = async(req) => {
    try{
        await database.query(cartQuery.deleteCart, req);
    }catch(err){
        throw Error(err);
    }
}