const signService = require('../services/signService');

exports.getSignIn = async(req, res) =>{
    return res.render('signIn')
}
exports.signIn = async(req, res) =>{
    const {user_id, user_pw} = req.body
    try{
        let user = await signService.signIn(user_id, user_pw)
        req.session.user_id = user[0].user_id; 
        req.session.save(function(){
            res.redirect('/main');
        })
    }catch(err){
        res.send('<script type="text/javascript">alert("아이디 또는 비밀번호를 확인해주세요"); location.href="/signIn";</script>');
        // return res.status(500).json(err);
    }
}

exports.signOut = async(req, res) =>{
    if(req.session){
        console.log('로그아웃 처리');
        req.session.destroy(
            function(err){
                if(err){
                    console.log('세션 삭제시 에러');
                    return;
                }
                console.log('세션 삭제 성공');
                res.redirect('/signIn');
            }
        );
    }else{
        console.log('로그인 안 되어 있음');
        res.redirect('/signin');
    }
}


exports.getSignUp = async(req, res) =>{
    return res.render('signUp')
}
exports.signUp = async(req, res) =>{
    const data = [req.body.user_id, req.body.user_pw, req.body.user_name]
    console.log("controller: ", data)
    try{
        signService.signUp(data)
        return res.redirect('/signIn')
    }catch(err){
        res.send('<script type="text/javascript">alert("이미 사용중인 아이디 입니다."); document.location.href="/signUp";</script>')
        return res.status(500).json(err)
    }
}
