exports.getCart = 'select * from cart_detail where cart_id=?';
exports.getCartInfo = 'select * from cart where cart_id=? and user_user_id=?';
exports.insertCart= 'insert into cart_detail (cart_id, book_id, cart_quantity, cart_price) values(?,?,?,?)';

exports.checkCart = 'select * from cart where user_user_id = ?';
exports.createCart = 'insert into cart (user_user_id, cart_createdate) value (?)';
exports.getCartId = 'select cart_id from cart where user_user_id=?';