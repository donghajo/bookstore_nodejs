const orderQuery = require('../queries/orderQuery');
const database = require('../../database/database');


exports.orderPage = async(req,res) =>{
    try{

    }catch(err){
        return res.status(500).json(err);
    }
}
exports.orderItem = async(req) =>{
    try{
        console.log(req);
        await database.query(orderQuery.orderItem, req);
        return;
    }catch(err){
        console.log(err);
        throw Error(err);
    }
}


exports.selectOrder = async(req)=>{
    try{
        const selectOrder = await database.query(orderQuery.selectOrder, req);
        return selectOrder[0];
    }catch(err){
        throw Error(err);
    }
}

exports.addOrderList = async(req) => {
    try{
        const addOrderList = await database.query(orderQuery.addOrderList, req);
        return addOrderList[0];
    }catch(err){
        throw Error(err);
    }
}

exports.minusBookCount = async (req) => {
    try{
        let minusBookCount = await database.query(orderQuery.minusBookCount, req)
        return minusBookCount[0]
    } 
    catch (error) {
        console.log(error)
        throw Error(error)
    }

}

exports.getOrderList = async (req, res) => {
    try{
        let orderList = await database.query(orderQuery.getOrderList, req);
        return orderList[0];
    }catch(err){
        throw Error(err);
    }
}

exports.getList = async(req) =>{
    try{
        console.log(req);
        let list = await database.query(orderQuery.getList, req);
        return list[0];
    }catch(err){
        console.log(err);
        throw Error(err);
    }
}
exports.getOrderId = async(req) =>{
    try{
        const order_id = await database.query(orderQuery.getOrderId, req);
        return order_id[0];
    }catch(err){
        throw Error(err);
    }
}

exports.deleteOrder = async(req) => {
    try{
        await database.query(orderQuery.deleteOrder, req);
    }catch(err){
        throw Error(err);
    }
}
exports.deleteOrderList = async(req) => {
    try{
        await database.query(orderQuery.deleteOrderList, req);
    }catch(err){
        throw Error(err);
    }
}
exports.plusBookCount = async (req) => {
    try{
        let bookCount = await database.query(orderQuery.plusBookCount, req)
        return bookCount[0]
    } 
    catch (error) {
        console.log(error)
        throw Error(error)
    }

}