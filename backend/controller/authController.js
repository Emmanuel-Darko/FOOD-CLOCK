const {connection,dbClose,dbOpen} = require("../db/dbConnect")
const bcrypt= require("bcryptjs")
const {signupValidator,loginValidator}=require("../validation/validation")

const callBack=(err,result,success=200,errCode=400)=>{
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

    connection.query(`INSERT INTO users VALUES ("${email}","${hash}","${role}")`,
    callBack(err,result,201)
  )   
}

const getUser = async(req,res)=>{
    const result= await loginValidator.validateAsync(req.body)
    const {email, password}=result
    connection.query(`SELECT * FROM users WHERE user_email ="${email}"`,
    (err,result)=>{
        if(err){console.log(err)}
        let userAvailable= bcrypt.compareSync(password, result.user_password);

        if(userAvailable){

            res.status(200).json(result)
        }else{
            res.status(404).json({message:`check your password or email : ${err}`})
        }

    })

    
}

const updateUser =(req,res)=>{
    const {email, password}=req.body
  
    if(!email && !password){
        return
    }

    if(email && password){
        connection.query(`UPDATE users SET user_email="${email}", user_password="${password}", user_role="${role}"`,
        callBack(err,result))
    }
   
    if(email && !password)
    {
        connection.query(`UPDATE users SET user_email="${email}","`,
        callBack(err,result))
    }
    
    if(!email && password){
        connection.query(`UPDATE users SET user_password="${password}", user_role="${role}"`,
        callBack(err,result))
    }

    
}

const deleteUser =(req,res)=>{
    const {email}=req.body
    connection.query(`userEmail && ("DELETE FROM users WHERE user_email="${email}"`,
   callBack(err,result))

}

module.exports ={
    createUser,
    getUser,
    deleteUser,
    updateUser
}