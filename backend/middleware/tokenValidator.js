const jwt=require('jsonwebtoken')

function validateToken (req,res,next){
    const {token}=req.headers
    jwt.verify(token,process.env.SECRETE_KEY,(err,verifyToken)=>{
        if (err) {
            console.log(err);
            res.status(400).json({message:"Bad Request"})
            return;
        }

        if(!verifyToken){
            res.status(401).json({message:"Unauthorized"})
            return;
        }else{

            next()
        }
        
    })
}

module.exports=validateToken