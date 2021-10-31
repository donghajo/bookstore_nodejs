const signService = require('../services/signService');


exports.getLogin = async(req, res) =>{
    return res.render('login')
}


exports.getSignup = async(req, res) =>{
    return res.render('signup')
}
exports.signup = async(req, res) =>{
    const {name, id, pw} = req.body
    console.log(name);
    try{
        signService.signup(name, id, pw)
        return res.redirect('/login')
    }catch(err){
        return res.status(500).json(err)
    }
}