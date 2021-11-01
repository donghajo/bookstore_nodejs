const signQuery = require('../queries/signQuery');
const database = require('../../database/database');

exports.signUp = async (req) => {
    try {
        console.log(req);
        database.query(signQuery.signUp, req)
        return
    } catch(err){
        throw Error(err)
    }
}

exports.signIn = async (req) => {
    try{
        let user = await database.query(signQuery.signIn, req)
        console.log(user[0]);
        return user[0]
    }catch(err){
        throw Error(err)
    }
}