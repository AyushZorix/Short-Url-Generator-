const express = require('express');
const urlRoute = require('./routes/url');
const app = express();
const connectDB = require('./connnections/connect');
const port = 8001;
const URL = require("./models/url"); 
const {checkForAuthentication , restrictTO } = require('./mwares/auth');
const path = require('path'); // for ejs views
const staticRouter = require('./routes/StaticRouter');
const UserRouter = require('./routes/user');
const cookieParser = require('cookie-parser');

app.use(express.urlencoded({ extended: false })); // middleware to parse URL-encoded bodies
app.use(express.json());  // mware to parse JSON bodies
app.use(cookieParser()); // middleware to parse cookies
app.use(checkForAuthentication); // to set req.user if token is present in header



// connection with db
connectDB("mongodb://localhost:27017/shorturl")
.then(() => console.log("Connected to the database"));

// Serve static files
app.set('view engine', 'ejs');
app.set('views' , path.resolve('./views')); // set views directory


app.use("/url", restrictTO(["NORMAL" , "ADMIN"]) ,  urlRoute);
app.use("/" , staticRouter);
app.use("/user" , UserRouter);


app.get("/:shortid", async(req, res) => {
const shortID = req.params.shortid;
const entry = await URL.findOneAndUpdate({
    shortID
} , {$push : { visitHistory : {
    timestamp : Date.now(), 
} }})
res.redirect(entry.redirectURL);
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
