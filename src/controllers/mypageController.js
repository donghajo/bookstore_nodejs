const mypageService = require('../services/mypageService');

exports.getMypage = async(req, res) =>{
    const { user_user_id } = req.params
        console.log(user_user_id);
    try {
        let card_info = await mypageService.cardInfo(user_user_id);
        let addr_info = await mypageService.addressInfo(user_user_id);
        console.log("pass");
        return res.render('mypage', {
            card_info:card_info,
            addr_info:addr_info,
            sess:user_user_id
        })
    }catch(error) {
        return res.status(500).json(error)
    }
}

exports.cardInsert =  async(req, res) =>{
    const data = [req.body.card_id, req.body.card_kind, req.body.card_expiredate, req.params.user_user_id ];
    try{
        mypageService.insertCard(data);
        res.redirect('/myPage/:user_user_id');
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.getCardInsert =  async(req, res) =>{
    return res.render('insertCard',{
        sess:req.session.user_id
    });
}

exports.addressInsert =  async(req, res) =>{

}
exports.getAddressInsert =  async(req, res) =>{
    return res.render('insertAddress');
}