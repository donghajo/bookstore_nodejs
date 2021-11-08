const bookQuery = require('../queries/bookQuery');
const database = require('../../database/database');

exports.getMain = async()=>{
    try{
        const rows = await database.query(bookQuery.getMain);
        return rows[0];
    }catch(err){
        throw Error(err);
    }
}

exports.bookInsert = async(req)=>{
    try{
        database.query(bookQuery.bookInsert, req);
        return;
    }catch(err){
        throw Error(err);
    }
}

exports.getDetail = async(req) => {
    try{
        const rows = await database.query(bookQuery.getDetail, req);
        return rows[0];
    }catch(err){
        throw Error(err);
    }
}

exports.bookDelete = async(req) =>{
    try{
        database.query(bookQuery.book_delete, req);
        return;
    }catch(err){
        throw Error(err);
    }
}


exports.bookUpdate = async(req) => {
    try{
        database.query(bookQuery.book_update, req);
        return;
    }catch(err){
        throw Error(err);
    }
}