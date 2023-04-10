const mysql = require("mysql")
// db connection
const connection = mysql.createConnection({
    host:"",
    user:"root",
    password:"",
    database:"food_clock"
})

const dbOpen=()=>{
     // database open
    connection.connect(console.log("Database connected Successfully"))
}

const dbClose=()=>{
    // database close
connection.end(console.log('Closed the database connection.'))
}
dbOpen()

module.exports= {connection,dbOpen,dbClose}