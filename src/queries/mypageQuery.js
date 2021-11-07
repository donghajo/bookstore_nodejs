//card
exports.cardList = 'select * from creditCard where user_user_id=?';
exports.insertCard = 'insert into creditCard(card_id, card_expiredate, card_kind, user_user_id) values(?, ?,?,?)';


//address
exports.addrList = "select * from address where user_user_id=?";
exports.insertAddress = 'insert into address(zipCode, address_default, address_detail, user_user_id) values(?,?,?,?)';

