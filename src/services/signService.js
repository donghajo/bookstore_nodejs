const signQuery = require('../queries/signQuery');
const database = require('../../database/database');

exports.signup = async (req) => {
    try {
        database.query(signQuery.signup, req)
        return
    } catch(err){
        throw Error(err)
    }
}