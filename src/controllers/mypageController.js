const mypageService = require('../services/mypageService');

exports.getMypage = async(req, res) =>{
    const { user_user_id } = req.params
    try {
        const card = await mypageService.cardInfo(user_user_id);
        const address = await mypageService.addressInfo(user_user_id);
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
      const {card_id, card_kind, card_expiredate}  = req.body;
      const {user_user_id} = req.params;
    try{
        mypageService.insertCard([card_id, card_kind, card_expiredate, user_user_id]);
        res.redirect('/myPage/'+user_user_id);
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
    const {zipCode, address_default, address_detail} = req.body;
    const {user_user_id} = req.params;
    try{
        mypageService.insertAddress([zipCode, address_default, address_detail, user_user_id]);
        res.redirect('/myPage/'+user_user_id);
    }catch(err){
        return res.status(500).json(err);
    }
}
exports.getAddressInsert =  async(req, res) =>{
    return res.render('insertAddress',{
        session:req.session.user_id
    });
}