// db connection
const sqlite3 = require("sqlite3").verbose()


let db= new sqlite3.Database("./db/companydb",sqlite3.OPEN_READWRITE, (err)=>{
    if(err){
        console.log(`error occured ${err.message}`);
    }else{
        console.log("Database connected Successfully");
    }
})

const dbClose=()=>{
    // database close
database.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Close the database connection.');
  });
}
