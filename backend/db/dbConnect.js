const mysql = require("mysql")
// db connection
const connection = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_AUTH,
    database:process.env.DB_NAME,
    multipleStatements: true,
})

const dbOpen=()=>{
     // database open
    connection.connect(console.log("Database connected Successfully"))
}

const dbClose=()=>{
    // database close
connection.end(console.log('Closed the database connection.'))
}


module.exports= {connection,dbOpen,dbClose}