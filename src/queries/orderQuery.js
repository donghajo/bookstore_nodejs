exports.orderDetailItem = 'insert into order_detail (order_id, book_id, order_detail_quantity, order_detail_price) values(?,?,?,?)';
exports.orderItem = 'insert into orders (order_id, order_date, order_price, credit_id, credit_expiredate, credit_kind, address_zipcode, address_address_default, address_address_detail, amount, user_user_id) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
exports.selectOrder = 'select * from order_detail where order_id = ?';
exports.addOrderList = 'insert into order_detail(order_id, book_id, order_quantity, order_price) values(?, ?, ?, ?)';
exports.minusBookCount = 'update book set book_quantity = (book_quantity - ?) where book_id = ?';
exports.plusBookCount = 'update book set book_quantity = (book_quantity + ?) where book_id = ?';
exports.getList = 'select * from order_detail where order_id = ?';
exports.getOrderList = 'select o.order_id, o.book_id, o.order_quantity, o.order_price, b.book_quantity, b.book_price from order_detail o, book b where o.book_id = b.book_id and o.order_id = ?';
exports.getOrderId = 'select * from orders where user_user_id=?'
exports.selectList = 'select * from orders where order_id = ?';

exports.getPoint = 'update user set point = (point + ?) where user_id = ?'
exports.setPoint = 'update user set point = (point - ?) where user_id = ?'
exports.getAccum = 'select accum from book where book_id = ?';

//delete
exports.deleteOrder = 'delete from orders where order_id = ?';
exports.deleteOrderList = 'delete from order_detail where order_id = ? and book_id';