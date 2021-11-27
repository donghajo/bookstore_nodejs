const mypageQuery = require('../queries/mypageQuery');
const database = require('../../database/database');

exports.cardInfo = async(req)=>{
    try{
        let info = await database.query(mypageQuery.cardList, req);
        return info[0];
    }catch{
        throw Error(error);
    }
}

exports.addressInfo = async(req)=>{
    try{
        let info = await database.query(mypageQuery.addrList, req);
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


exports.deleteAddress = async(req)=>{
    try{
        database.query(mypageQuery.deleteAddress, req);
        return;
    }catch(err){
        throw Error(err);
    }
}
exports.deleteCard = async(req)=>{
    try{
        database.query(mypageQuery.deleteCard, req);
        return;
    }catch(err){
        throw Error(err);
    }
}

exports.updateCard = async(req)=>{
    try{
        database.query(mypageQuery.updateCard, req);
        return;
    }catch(err){
        throw Error(err);
    }
}

exports.updateAddress = async(req)=>{
    try{
        database.query(mypageQuery.updateAddress, req);
        return;
    }catch(err){
        throw Error(err);
    }
}

exports.cardDetail = async(req)=>{
    try{
        let detail = await database.query(mypageQuery.cardDetail, req);
        return detail[0]
    }catch(err){
        throw Error(err);
    }
}

exports.addressDetail = async(req)=>{
    try{
        let detail = await database.query(mypageQuery.addressDetail, req);
        return detail[0]
    }catch(err){
        throw Error(err);
    }
}
