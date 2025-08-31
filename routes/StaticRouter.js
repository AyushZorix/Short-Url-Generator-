const express = require("express");
const { restrictTO } = require("../mwares/auth");
const router = express.Router();


router.get("/", (req, res) => {
    return res.render("home") 
})
router.get('/signup' , (req , res)=> {
    return res.render("signup")
})
router.get('/login' , (req , res)=> {
    return res.render("login")
})
router.get('/admin/url', restrictTO(["ADMIN"]) , (req , res)=> {
    return res.render("home") 
})
module.exports = router;