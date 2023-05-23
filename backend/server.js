const express =require("express")
const cors =require("cors")
const app =express()
require("dotenv").config()
// setting dynamic port
const PORT = process.env.PORT||3000
app.use(cors())

app.use(express.json());

const authRoutes =require("./routes/authRoutes")
const menuRoutes =require("./routes/menuRoutes")


app.use("/auth",authRoutes)
app.use("/menu",menuRoutes )

app.use("*",(req,res)=>{S
    res.status(404).json({message:"error 4040, Page not found"})
})



app.listen(PORT,()=>console.log(`listening on http://localhost:${PORT}`))