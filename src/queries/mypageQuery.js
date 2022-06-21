//card
exports.cardList = 'select * from creditCard where user_user_id=?';
exports.insertCard = 'insert into creditCard(card_id, card_expiredate, card_kind, user_user_id) values(?, ?,?,?)';
exports.deleteCard = 'delete from creditCard where card_id= ?'
exports.updateCard = 'update creditCard set card_id=?, card_expiredate=?, card_kind=? where user_id=?'

//address
exports.addrList = "select * from address where user_user_id=?";
exports.insertAddress = 'insert into address(zipCode, address_default, address_detail, user_id) values(?,?,?,?)';
exports.deleteAddress = 'delete from address where zipCode=? and user_user_id=? ';
exports.updateAddress = 'update address set zipCode=?, address_default=?, address_detail=? where user_id=?'

exports.cardDetail = 'select * from creditCard where card_id = ?';
exports.addressDetail = 'select * from address where address_id = ? '