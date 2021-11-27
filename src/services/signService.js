const signQuery = require('../queries/signQuery');
const database = require('../../database/database');

exports.signUp = async (req) => {
    try {
        database.query(signQuery.signUp, req)
        return
    } catch(err){
        throw Error(err)
    }
}

exports.signIn = async (user_id, user_pw) => {
    try{
        let user = await database.query(signQuery.signIn, [user_id, user_pw])
        return user[0]
    }catch(err){
        throw Error(err)
    }
}

exports.recommendSignup = async (req) => {
    try{
        database.query(signQuery.recommend, req);
    }catch(err){
        throw Error(err);
    }
}

exports.getPoint = async (user_id) =>{
    try{
        let user = await database.query(signQuery.getPoint, user_id);
        return user;
    }catch(err){
        throw Error(err);
    }
}

exports.sendPoint = async (req) =>{
    try{
        database.query(signQuery.insertPoint, req);
    }catch(err){
        throw Error(err);
    }
}