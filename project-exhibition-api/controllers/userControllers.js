const dbConfig = require('../utils/dbconfig');

// 登陆
let login = (req, res) => {
  let { username,password } = req.query;
  let sql = 'SELECT * FROM users WHERE username=? AND PASSWORD=?'
  let sqlArr = [username,password]
  let callBack = (err, data) => {
    res.send({
      "list":data
    })
  }
  dbConfig.sqlConnect(sql, sqlArr, callBack)
}

module.exports = {
  login
}