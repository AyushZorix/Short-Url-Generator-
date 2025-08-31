const { Getuser } = require('../service/auth');

function checkForAuthentication(req, res, next) {
    const tokenCookie = req.cookies?.token;
    req.user = null;
  if(!tokenCookie ) return next()
 
 const token = tokenCookie
  const user = Getuser(token);
  req.user = user;
  return next();

}

//admin , normal , routes restricted
function restrictTO(roles = []) {
    return (req, res, next) => {
        if (!req.user) return res.redirect('/login');
        
        if (!roles.includes(req.user.role)) {
            return res.render("unauthorized");
        }
        
         return next();
    };
}

module.exports = {
    checkForAuthentication,
    restrictTO,
}
