
const { nanoid } = require("nanoid");
const URL = require("../models/url");  // db model as i have to insert here 
async function generateNewShortUrl(req, res) {
const shortID = nanoid(8);
const body = req.body;
if( !body.url ) return res.status(400).json({ msg : "url is required" });
await URL.create({
    shortID : shortID,
    redirectURL : body.url,
    visitHistory : [],
})
return res.render("home", { shortID: shortID, redirectURL: body.url });
} 

module.exports = {
    generateNewShortUrl
}