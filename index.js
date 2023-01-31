var mysql = require('mysql')

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'qwerty',
    database: 'mydb'
})

con.connect((err) => {
    if (err) throw err;

    console.log('Connected successfully!')

    var sql = 'CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))'

    con.query(sql, (err, result) => {
        if (err) throw err;
        console.log('Table created!')
    })
})