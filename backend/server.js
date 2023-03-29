const express =require("express")
const sqlite3 = require("sqlite3").verbose()
const cors =require("cors")
const app =express()
app.use(cors())
// setting dynamic port
const PORT = process.env.PORT||3000

// db connection
let db= new sqlite3.Database("./db/foodclock",sqlite3.OPEN_READWRITE, (err)=>{
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


app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded());

app.get("/", function(req,res){
  res.render("index",{name:"Steven"})   
});

app.post("/login",(req,res)=>{
    const {email,password}=req.body
    db.serialize(() => {
            db.run(`SELECT *
                    FROM users 
                    WHERE users.email = "${email}" and users.password = "${password}"`, (err, result) => {
            if (err) {
                console.error(err.message);
            }
            res.render("home",{data:result})
            console.log(result);
            });
        });
})

app.post("/signup",(req,res)=>{
    const {email,password}=req.body
    db.serialize(() => {          
        //         db.run(`SELECT * FROM users 
        //         WHERE users.email = "${email}"`, (err, result) => {
        //             if (err) {
        //             console.error(err.message);

        //             if(result.email){
        //                 alert('user already exits')
        //                     return
        //             }
        //            }
        // })  
      
            db.run(`INSERT INTO users  VALUES("${email}", "${password}", NULL, 'user') `, (err, result) => {            
                if(err){
                    console.log(err);
                }
                res.render("home",{data:{email:this.changes,password:password}})
            })  
        
        
                            
    });    
});



app.listen(PORT);
console.log(`listening on http://localhost:${PORT}`);