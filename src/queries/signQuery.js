//signUp query
exports.signUp = 'insert into user (user_id, user_pw, user_name) values(?, ?, ?)'

//signIn query
exports.signIn = 'select * from user where user_id=? and user_pw=?'