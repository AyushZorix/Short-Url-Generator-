const {Getuser} = require('../service/auth');
async function RestrictToLoggedInUserOnly(req ,res, next) {
    const userUID = req.cookies.sessionId;
    if(!userUID) return res.redirect('/login');
    const user = Getuser(userUID);
    if(!user) return res.redirect('/login');
    req.user = user;
    next();
}

module.exports = RestrictToLoggedInUserOnly;