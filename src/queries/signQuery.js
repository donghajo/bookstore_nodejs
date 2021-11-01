//signUp query
exports.signUp = 'insert into user (id, pw, name) values(?, ?, ?)'

//signIn query
exports.signIn = 'select * from user where id=? and pw=?'