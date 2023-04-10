const {connection,dbClose,dbOpen} = require("../db/dbConnect")

const createUser =(req,res)=>{
    const {userEmail, userPassword,role}=req.body

    dbOpen()
    connection.query(`INSERT INTO users VALUES ("",user_email="${userEmail}",user_password= "${userPassword}"),user_role="${role}"`,
    (err,result)=>{
        if(err){console.log(err)}
        console.log(result);
    })

    dbClose()
}
const getUser =(req,res)=>{
    const {userEmail, userPassword}=req.body

    dbOpen()
    connection.query(`SELECT * FROM users WHERE user_email ="${userEmail}" AND user_password= "${userPassword}"`,
    (err,result)=>{
        if(err){console.log(err)}
        console.log(result);
    })

    dbClose()
}

// const updateUser =(req,res)=>{
//     const {userEmail, userPassword}=req.body
//     dbOpen()
//     let updateQuery;
//     if(userEmail && userPassword)
//     { updateQuery = `UPDATE`}
//     connection.query(`${
//         userEmail && ("UPDATE users SET ")

//     }`,
//     (err,result)=>{
//         if(err){console.log(err)}
//         console.log();
//     })

//     dbClose()
// }


module.exports ={
    createUser,
    getUser
}