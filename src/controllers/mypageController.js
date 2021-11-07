const mypageService = require('../services/mypageService');

exports.getMypage = async(req, res) =>{
    const { user_user_id } = req.params
        console.log(user_user_id);
    try {
        let card = await mypageService.cardInfo(user_user_id);
        let address = await mypageService.addressInfo(user_user_id);
        return res.render('mypage', {
            card :card,
            address :address,
            session:user_user_id
        })
    }catch(error) {
        return res.status(500).json(error)
    }
}

exports.cardInsert =  async(req, res) =>{
      const data = [req.body.card_id, req.body.card_kind, req.body.card_expiredate, req.params.user_user_id ];
    try{
        mypageService.insertCard(data);
        res.redirect('/myPage/'+req.user_user_id);
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.getCardInsert =  async(req, res) =>{
    return res.render('insertCard',{
        session:req.session.user_id
    });
}

exports.addressInsert =  async(req, res) =>{
    const data = [req.body.zipCode, req.body.address_default, req.body.address_detail, req.params.user_user_id];
    try{
        mypageService.insertAddress(data);
        res.redirect('/myPage/'+req.params.user_user_id);
    }catch(err){
        return res.status(500).json(err);
    }
}
exports.getAddressInsert =  async(req, res) =>{
    return res.render('insertAddress',{
        session:req.session.user_id
    });
}