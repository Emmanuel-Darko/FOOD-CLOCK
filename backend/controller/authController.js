const {connection,dbClose,dbOpen} = require("../db/dbConnect")
const bcrypt= require("bcryptjs")



const createUser =(req,res)=>{
    const {email,password,role}=req.body
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    connection.query(`INSERT INTO users VALUES ("${email}","${hash}","${role}")`,
    (err,result)=>{
        if(err){console.log(err)}
       
        res.send(result)
    })   
}

const getUser =(req,res)=>{
    const {email, password}=req.body
   
    connection.query(`SELECT * FROM users WHERE user_email ="${email}"`,
    (err,result)=>{
        if(err){console.log(err)}
        let userAvailable= bcrypt.compareSync(password, result.user_password);

        if(userAvailable){

            res.send(result)
        }else{
            res.send('check your password or email')
        }

    })

    
}

const updateUser =(req,res)=>{
    const {email, password}=req.body
   const callBack=(err,result)=>{
    if(err){console.log(err)}
    res.send(result)
}
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
    (err,result)=>{
        if(err){console.log(err)}
        console.log();
    })

}

module.exports ={
    createUser,
    getUser,
    deleteUser,
    updateUser
}