const jwt = require('jsonwebtoken');


/******************************************authentication*********************************************/

const authentication = function (req, res, next) {
    try {
        const token = req.headers["x-auth-key"]

        // console.log(token);

        // if(!token) { token = req.headers["x-Auth-Key"] }

        if (!token) {
            return res.status(407).send({ status: false, msg: "token not found" })
        }
        const decodedToken = jwt.verify(token, "my-first-blog-project")
        if (!decodedToken) {
            return res.status(401).send({ status: false, msg: "authentication failed" })
        }
    }
    catch (error) {
        console.log("this is the error ", error.message);
        return res.status(500).send({ status: false, msg: error.message })
    }
    next()
}

/******************************************authorization*********************************************/


const authorization = function (req, res, next) {





    next()
}





module.exports.authentication = authentication
module.exports.authorization = authorization