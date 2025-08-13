const express = require('express');
const urlRoute = require('./routes/url');
const app = express();
const connectDB = require('./connnections/connect');
const port = 8001;
const URL = require("./models/url"); 


app.use(express.json());  // mware to parse JSON bodies
// connection with db
connectDB("mongodb://localhost:27017/shorturl")
.then(() => console.log("Connected to the database"));

app.use("/url", urlRoute);


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
