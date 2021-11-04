const signQuery = require('../queries/signQuery');
const database = require('../../database/database');

exports.signUp = async (req) => {
    try {
        console.log("service:", req);
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