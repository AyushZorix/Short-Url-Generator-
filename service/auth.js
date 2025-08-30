// const sessionIdToUserMap = new Map(); // here we are maintraining the state of the user 
// but now we will be using JSON web token

const jwt = require('jsonwebtoken');
 const secret = "ayushapp@123"; // this is the secret key and whoever has it can make tokens add data to it 


 /// below function will make tokens for me 

 function Setuser(user) {
    return jwt.sign(
        {
            id: user._id,
            name: user.name,
            email: user.email  
        },
        secret,
        { expiresIn: "1h" }  // optional
    );
}

function Getuser(token) {
    if (!token) return null;
    return jwt.verify(token, secret);
} 

 
module.exports = {
    Setuser,
    Getuser
};