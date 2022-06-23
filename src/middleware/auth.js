const jwt = require('jsonwebtoken');

const authentication = function(req,res,next){

    const token = req.headers["x-Auth-Token"]

    if(!token) { token = req.headers["x-auth-token"] }

    if(!token){
        return res.status(407).send({status: false, msg: "token not found"})
    }
    const decodedToken = jwt.verify(token, "my-first-blog-project" )
     if(!decodedToken){
        return res.
     }




}