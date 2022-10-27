const express = require("express");
const router =express.Router();
const role =require("../middleware/role");
const auth = require("../middleware/auth");
const MessagePost = require("../model/MessagePost");
const Message = require("../model/MessagePost");
const Post = require("../model/Post");
const User = require("../model/User");
const Categories =require("../model/Categorie");

 // creer des categories
router.post("/creerCategorie",role,async(req,res)=>{
    try {
        const categorie = new Categories({
            "titre" : req.body.titre,
            "contenu" : req.body.contenu,
        })
        await categorie.save();
        res.json(categorie);
    } catch (error) {
        res.status(500).json(error.Message);
    }
})


router.get("/afficherAllCategories",async(req,res)=>{
    try {
        const categories =await Categories.find().sort({nombrePost:-1});
        res.json(categories);
    } catch (error) {
        res.status(500).json(error.Message);
    }
})



  module.exports = router;