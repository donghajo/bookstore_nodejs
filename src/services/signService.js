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

exports.signIn = async (id, pw) => {
    try{
        let user = await database.query(signQuery.signIn, [id, pw])
        console.log('service clear');
        return user[0]
    }catch(err){
        throw Error(err)
    }
}