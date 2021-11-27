const orderQuery = require('../queries/orderQuery');
const bookQuery = require('../queries/bookQuery');
const database = require('../../database/database');
const { order } = require('../controllers/orderController');


exports.orderPage = async(req,res) =>{
    try{

    }catch(err){
        return res.status(500).json(err);
    }
}
exports.orderItem = async(req,res) =>{
    try{
        console.log(req);
      const orderItem = await database.query(orderQuery.orderItem, req);
        return orderItem[0]
    }catch(err){
        throw Error(err);
    }
}


exports.selectOrder = async(req,res)=>{
    try{
        const selectOrder = await database.query(orderQuery.selectOrder, req);
        return selectOrder[0];
    }catch(err){
        throw Error(err);
    }
}

exports.addOrderList = async(req,res) => {
    try{
        const addOrderList = await database(orderQuery.addOrderList, req);
        return addOrderList[0];
    }catch(err){
        throw Error(err);
    }
}

exports.minusBookCount = async (req) => {
    try{
        let minusBookCount = await db.query(orderQuery.minusBookCount, req)
        return minusBookCount[0]
    } 
    catch (error) {
        console.log(error)
        throw Error(error)
    }

}