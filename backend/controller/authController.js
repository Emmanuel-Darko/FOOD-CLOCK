const {connection,dbClose,dbOpen} = require("../db/dbConnect")
const bcrypt= require("bcryptjs")
const jwt=require('jsonwebtoken')
const {signupValidator,loginValidator,updateValidator}=require("../validation/validation")
const crypto =require("crypto")


const callBack=(err,result,res,success=200,errCode=400)=>{
    if(err){
        console.log(err)
        res.status(errCode).json({message:"enter valid email or password"})
    }
    res.status(success).json(result)
}  

const createUser = async(req,res)=>{
    const result= await signupValidator.validateAsync(req.body)
    const {email,password,role}= result
    if(!email&&!password){
        res.status(400).json(result)
        return
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const uuid=  `UUID${crypto.randomInt(1,500)}`

// check if user exists
    connection.query(`SELECT user_email FROM users where user_email="${email}"`,(err,result)=>{
        let userExist=result[0]?.user_email;
        if(err){
            console.log(err)
            res.status(400).json({message:"enter valid email or password"})
            return;
        }
       else if(userExist){

            res.status(409).json({message:"email already exists"})
            return;
        }
        else{
            // insert new user into database
            connection.query(`INSERT INTO users VALUES ("${email}","${hash}","${!role?"trainee":role}","${uuid}")`,
            (err,result)=>{
                if(err){
                    res.status(400).json({message:"server erorr occured"})
                    return;
                }
                // res.status(201).json(result)
                // get new user unserted into database and send to view
                connection.query(`SELECT user_email,roles, uuid FROM users where user_email="${email}"`,(err,result)=>{
                    if(err){
                        console.log(err)
                        res.status(204).json({message:"server erorr occured"})
                    }
                    res.status(201).json(result)
                }) 
            }
          ) 
        } 
    })   
}

const getUser = async(req,res)=>{
   
        const {error} = loginValidator.validate(req.body)
    // console.log("result",result,error)   
    if(error){
        res.status(400).json({message:"invalid email or password"})
        return;  
    }
    else{  
        const {email,password}=req.body
       
       
     connection.query(`SELECT * FROM users WHERE user_email ="${email}"`,
    (err,result)=>{
        let userExist=result[0]?.user_email;
        let userValid= bcrypt.compareSync(password, result[0].user_password);
        if(err){
            res.status(400).json({message:"invalid email or password"})
            return;      
        }
        else if(!userExist||!userValid){
                res.status(409).json({message:"invalid email or password"})
                return;
            }else{        
                const user=result[0]
                const token =jwt.sign({email,password},process.env.SECRETE_KEY,{ expiresIn: '1h' })
                    res.status(200).json({user,token})
                
            }}
        )}
        dbClose
    } 


const updateUser =async(req,res)=>{

    const result= await updateValidator.validateAsync(req.body)
    const {password,oldPassword}=result
    const {uuid}=req.params  

    connection.query(`SELECT * FROM users WHERE uuid ="${uuid}"`,
    (err,result)=>{
        if(err){
            console.log(err)
        }
        let userAvailable= bcrypt.compareSync(oldPassword, result[0].user_password);

        if(!userAvailable){
            res.status(404).json({message:`Unauthorized User: ${err}`})
            return;     
        }else{
            connection.query(`UPDATE users SET user_password="${password}" WHERE uuid="${uuid}" `,
            (err,result)=>{
                callBack(err,result,res)
            })         
        }
    }
    )
    
}

const deleteUser =(req,res)=>{
   
    const {uuid}=req.params
 
    if(!uuid){
        res.status(404).json({message:`Unauthorized User`})
        return;
    }
    connection.query(`DELETE FROM users WHERE uuid="${uuid}"`,
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