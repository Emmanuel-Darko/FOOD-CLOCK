const express =require("express")
const cors =require("cors")
const app =express()
app.use(cors())
// setting dynamic port
const PORT = process.env.PORT||3000
// data base
require("./db/dbConnect")

app.use(express.json());
app.set('view engine', 'ejs');

const authRoutes =require("./routes/authRoutes")
const menuRoutes =require("./routes/menuRoutes")

app.use("/auth",authRoutes)
app.use("/menu",menuRoutes )

app.use("/*",(req,res)=>{
    res.render("error")
})



app.listen(PORT,()=>console.log(`listening on http://localhost:${PORT}`))