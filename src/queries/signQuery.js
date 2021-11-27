//signUp query
exports.signUp = 'insert into user (user_id, user_pw, user_name) values(?, ?, ?)'

//signIn query
exports.signIn = 'select * from user where user_id=? and user_pw=?'

//recommender query
exports.recommend = 'insert into user (user_id, user_pw, user_name, recommender_id) values(?, ?, ?,?)';

exports.insertPoint = 'update user set point = (point + 10000) where user_id = ?'; 

exports.getPoint = 'select * from user where user_id=?';