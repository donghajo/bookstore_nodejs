const mypageQuery = require('../queries/mypageQuery');
const database = require('../../database/database');

exports.cardInfo = async(req)=>{
    try{
        console.log("cardServIn : ", req);
        let info = await database.query(mypageQuery.cardList, req);
        console.log("pass");
        return info[0];
    }catch{
        throw Error(error);
    }
}

exports.addressInfo = async(req)=>{
    try{
        console.log("addrServIn : ", req);
        let info = await database.query(mypageQuery.addrList, req);
        console.log("pass");
        return info[0];
    }catch{
        throw Error(error);
    }
}

exports.insertAddress= async(req)=>{
    try{
        database.query(mypageQuery.insertAddress, req);
        return;
    }catch(err){
        throw Error(err);
    }
}

exports.insertCard = async(req)=>{
    try{
        database.query(mypageQuery.insertCard, req);
        return;
    }catch(err){
        throw Error(err);
    }
}