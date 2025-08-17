const { nanoid } = require("nanoid");
const URL = require("../models/url");  // db model as i have to insert here 

async function generateNewShortUrl(req, res) {
    const shortID = nanoid(8);
    let { url } = req.body;

    if (!url) {
        return res.status(400).json({ msg: "url is required" });
    }

    // Ensure protocol (http/https) is present
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
        url = "http://" + url;
    }

    await URL.create({
        shortID: shortID,
        redirectURL: url,
        visitHistory: [],
    });

    return res.render("home", { shortID: shortID, redirectURL: url });
} 

module.exports = {
    generateNewShortUrl
};
