exports.getCart = 'select * from cart_detail where cart_id=?';
exports.cartInformation = 'select * from cart where cart_id = ? and user_user_id = ?';
exports.getCartInfo = 'select c.cart_id, c.book_id, c.cart_quantity, b.book_id, b.book_name, b.book_quantity, b.book_price from cart_detail c, book b where c.book_id = b.book_id and c.cart_id=?';
exports.insertCart= 'insert into cart_detail (cart_id, book_id, cart_quantity, cart_price) values(?,?,?,?)';

exports.checkCart = 'select * from cart where user_user_id = ?';
exports.createCart = 'insert into cart (cart_id, user_user_id, cart_createdate) value (?)';
exports.getCartId = 'select cart_id from cart where user_user_id=?';

//delete one
exports.deleteLine = 'delete from cart_detail where cart_id = ? and book_id = ?';


//delete cart
exports.deleteLineAll = 'delete from cart_detal where cart_id = ?';
exports.deleteCart = 'delete from cart where cart_id = ?';