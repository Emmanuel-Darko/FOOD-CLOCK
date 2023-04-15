const {connection,dbClose,dbOpen} = require("../db/dbConnect")
const bcrypt= require("bcryptjs")

const {signupValidator,loginValidator,updateValidator}=require("../validation/validation")
const crypto =require("crypto")

const callBack=(err,result,res,success=200,errCode=400)=>{
    if(err){
        console.log(err)
        res.status(errCode).json({message:err})
    }
    res.status(success).json(result)
}  

const createUser = async(req,res)=>{
    const result= await signupValidator.validateAsync(req.body)
    const {email,password,role}= result
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const uuid=  `UUID${crypto.randomInt(1,500)}`

    connection.query(`INSERT INTO users VALUES ("${email}","${hash}","${role}","${uuid}")`,
    (err,result)=>{
        callBack(err,result,res,201)
    }
  )   
}

const getUser = async(req,res)=>{
    const result= await loginValidator.validateAsync(req.body)
    const {email, password}=result
    connection.query(`SELECT * FROM users WHERE user_email ="${email}"`,
    (err,result)=>{
        if(err){console.log(err)}
        let userAvailable= bcrypt.compareSync(password, result[0].user_password);

        if(userAvailable){
            res.status(200).json(result)
        }else{
            res.status(404).json({message:`check your password or email : ${err}`})
        }

    })

    
}

const updateUser =async(req,res)=>{
    const result= await updateValidator.validateAsync(req.body)
    const {password,oldPassword}=result
    const {uuid}=req.params

    connection.query(`SELECT * FROM users WHERE uuid ="${uuid}"`,
    (err,result)=>{
        if(err){console.log(err)}
        let userAvailable= bcrypt.compareSync(oldPassword, result[0].user_password);

        if(userAvailable){
            connection.query(`UPDATE users SET user_password="${password}" WHERE uuid="${uuid}" `,
            (err,result)=>{

                callBack(err,result,res)
            })
           
        }else{
            res.status(404).json({message:`invalid password : ${err}`})
        }
    }
    )
}

const deleteUser =(req,res)=>{
    const {email}=req.body
    connection.query(`userEmail && ("DELETE FROM users WHERE user_email="${email}"`,
    (err,result)=>{

        callBack(err,result,res)
     })

}

module.exports ={
    createUser,
    getUser,
    deleteUser,
    updateUser
}