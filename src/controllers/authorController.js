const authorModel = require('../models/authorModel')
const validator = require('email-validator')
const passwordValidator = require('password-validator');
const jwt = require('jsonwebtoken');

const createAuthor = async function (req, res) {

    try {
        const authordata = req.body

        const { fname, lname, title, email, password } = authordata

        if (!fname) {
            return res.status(400).send({ status: false, msg: "Oops! you forgot to enter First Name" })
        }

        if (!lname) {
            return res.status(400).send({ status: false, msg: "Oops! you forgot to enter Last Name" })
        }

        if (!title) {
            return res.status(400).send({ status: false, msg: "Oops! you forgot to enter Title of the name " })
        }

        // if (){

        // }

        if (!email) {
            return res.status(400).send({ status: false, msg: "Oops! you forgot to enter email address" })
        }


        let checkEmail = validator.validate(email)
        if (!checkEmail) {
            return res.status(400).send({ status: false, msg: "please enter the email address properly " })
        }

        let uniqueEmail = await authorModel.findOne({ email: email })

        if (uniqueEmail) {
            return res.status(400).send({ status: false, msg: "Sorry! this email is already exists" })
        }


        if (!password) {
            return res.status(400).send({ status: false, msg: "Oops! you forgot to enter Password" })
        }

        let schema = new passwordValidator();
        schema.is().min(8).is().max(100).has().uppercase().has().lowercase().has().digits(2).has().not().spaces().is().not().oneOf(['Passw0rd', 'Password123', 'mypassword']);
        let checkPassword = schema.validate(password)


        if (checkPassword === false) {
            return res.status(400).send({ status: false, msg: "password should have min 8 character + one Uppercase + one lowercase + min 2 digits + should not have any space + should not be one of these : Passw0rd, Password123,mypassword" })
        }

        const finalData = await authorModel.create(authordata);
        return res.status(201).send({ msg: finalData })
    }
    catch (error) {
        console.log("this is the error ", error.message)
        res.status(500).send({ msg: error.message })

    }

}



const authorLogin = async function (req,res){
    const username = req.body.email
    const password = req.body.password
    console.log(username);
    const findAuthor = await authorModel.findOne({email:username, password: password})
        if (!findAuthor){
            return res.status(404).send({status: false, msg:"sorry No Author found Or Your Credentials are not Matched, Please Create Author first"})
         }


    const token = jwt.sign({
        userId: findAuthor._id.toString(),
        autherType: "test",
        projectName:  "blog-project"
    }, "my-first-blog-project"
    )

    res.setHeader("x-auth-key", token)
    return res.send({status:true, token: token})

}




module.exports.authorLogin = authorLogin
module.exports.createAuthor = createAuthor
