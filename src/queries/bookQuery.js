exports.getMain = 'select * from book';
exports.bookInsert = 'insert into book (book_name, book_quantity, book_price) values(?,?,?)';
exports.book_update = 'update book set book_name = ?, book_quantity = ?, book_price = ? where book_id = ?';
exports.book_delete = 'delete from book where book_id = ?';
exports.getDetail = 'select * from book where book_id = ?';