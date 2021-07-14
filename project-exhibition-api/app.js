const express = require('express')
const app = express()

const dbConfig = require('./utils/dbconfig')


app.get('/', (req, res) => {
  let sql = 'select * from cate'
  let sqlArr = []
  let callBack = (err, data) => {
    res.send({
      "list": data
    })
  }

  dbConfig.sqlConnect(sql, sqlArr, callBack)
})

// 监听端口
app.listen(3000, () => {
  console.log('server start at http://127.0.0.1:3000');
})