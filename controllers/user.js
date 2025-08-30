const User = require('../models/user');
const {v4 : uuidv4} = require('uuid')
const {Getuser , Setuser} = require('../service/auth')
async function UserSignup(req, res) {
    const {name , email , password} = req.body;
    await User.create({
        name: name,
        email: email,
        password: password
    });
    return res.redirect("/");
}
async function UserLogin(req, res) {
    const { email , password} = req.body;
const user =  await User.findOne({email,password})
if( !user) return res.render('login', {error: "Invalid email or password"});

const token = Setuser(user)
res.cookie("sessionId", token)
    return res.redirect("/");
}
module.exports = {UserSignup , UserLogin};