exports.orderDetailItem = 'insert into order_detail (order_id, book_id, order_detail_quantity, order_detail_price) values(?,?,?,?)';
exports.orderItem = 'insert into order (order_id, order_date, order_price, credit_id, credit_expiredate, credit_kind, address_zipcode, address_address_default, address_address_detail, user_user_id) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
exports.selectOrder = 'select * from order where user_user_id, order by order_date';
exports.addOrderList = 'insert into order_lists(order_id, book_id, book_detail_quantity) values(?, ?, ?)';
exports.minusBookCount = 'update books set book_stock = (book_stock - ?) where book_uid = ?';