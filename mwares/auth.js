const { Getuser } = require('../service/auth');

async function RestrictToLoggedInUserOnly(req, res, next) {
    const userUID = req.headers["authorization"]; // lowercase
    if (!userUID) return res.redirect('/login');

    // Ensure it's in the format "Bearer <token>"
    const token = userUID.split("Bearer ")[1];
    if (!token) return res.redirect('/login');

    const user = Getuser(token);
    if (!user) return res.redirect('/login');

    req.user = user;
    next();
}

module.exports = RestrictToLoggedInUserOnly;
