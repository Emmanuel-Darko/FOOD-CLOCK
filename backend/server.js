const express =require("express")
const cors =require("cors")
const app =express()
app.use(cors())
// setting dynamic port
const PORT = process.env.PORT||3000

require("./db/dbConnect")

app.use(express.json());
app.set('view engine', 'ejs');

// app.get("/", function(req,res){
//   res.render("index",{name:"Steven"})   
// });

// app.post("/login",(req,res)=>{
//     const {email,password}=req.body

//     connection.query(`SELECT * FROM users 
//         WHERE users.email = "${email}" and users.password = "${password}"`, 
//         (err, result) => {
//             if (err) {
//                 console.error(err.message);
//             }

//             if(result.email === email){
//                 db.each(
//                     `SELECT * 
//                     FROM meanu `
//                 )
//                 // res.render("home",{data:result})
//             }
//             console.log(result);
//             });  
        
// })

// app.post("/signup",(req,res)=>{
//     const {email,password,role}=req.body         
//             connection.query(`INSERT INTO users  VALUES( "${NULL}","${email}", "${password}", "${role}") `, (err, result) => {            
//                 if(err){
//                     console.log(err);
//                 }
//                 console.log(result);
//                 // res.render("home",{data:{email:email,roles:"user"}})
//             })  
// });




// app.use("/*",(req,res)=>{
//     res.render("error")
// })



app.listen(PORT,()=>console.log(`listening on http://localhost:${PORT}`))