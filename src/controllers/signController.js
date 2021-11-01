const signService = require('../services/signService');


exports.getSignIn = async(req, res) =>{
    return res.render('signIn')
}
exports.signIn = async(req, res) =>{
    const data = [req.body.id, req.body.pw]
    try{
        let user = await signService.signIn(data)
        req.session.id = user[0].id; 
        if(user[0].id == id && user[0].pw == pw){
            //signIn success
            return res.send('<script type="text/javascript">alert("환영합니다!"); location.href="/main";</script> session:${req.session.id}');
        }
        req.session.save(function(){
            res.redirect('/main')
        })
    }catch(err){
        res.send('<script type="text/javascript">alert("아이디 또는 비밀번호를 확인해주세요"); location.href="/signIn";</script>');
        return res.status(500).json(err);
    }
}


exports.getSignUp = async(req, res) =>{
    return res.render('signUp')
}
exports.signUp = async(req, res) =>{
    const data = [req.body.id, req.body.pw, req.body.name]
    console.log("controller: ", data)
    try{
        signService.signUp(data)
        return res.redirect('/signIn')
    }catch(err){
        return res.status(500).json(err)
    }
}

exports.getMain = async(res) =>{
    return res.render('main');
}
