var mysql = require('mysql2')
var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root', //
  password: process.env.LocalSqlPassword,
  database: 'newdb',
})
connection.connect((err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('Database connected')
})
module.exports = connection