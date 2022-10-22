const express = require("express");
const router =express.Router();
const role =require("../middleware/role");
const Post =require("../model/Post");
const Message = require("../model/MessagePost");
const User = require("../model/User");
const auth = require("../middleware/role");
const { json } = require("express");


//page d'accueil de l'admin
router.get("/",role,async(req,res)=>{
    try {
        res.status(201).json(req.payload.role);
    } catch (error) {
        res.status(500).json(error.message);
    }
    
});

// clique sur un boutton a accès à tous les posts avec possibilité de modif ou sup le post
router.get("/allPost",role,async(req,res)=>{
    try {
        const post = await Post.find();
        res.json(post);
    } catch (error) {
        res.status(500).json(error.message);
    }
})

//route qui permet de ban un utilisateur ou de mettte ban a true
router.put("/banUser/:id",role,async(req,res)=>{
    try {
        const idUser= req.params.id;
        const ban = req.body.bannis;
        const utilisateur =await User.findById(idUser);
        if(utilisateur.bannis=== true){
            return res.json("Cet utilisteur a déjà été bannis.");
        }
        utilisateur.bannis = ban;
        await utilisateur.save();
        res.json("l'utilisateur "+utilisateur.nom+" "+utilisateur.prenom+" a bien été bannis.");
    } catch (error) {
        res.status(500).json(error.message);
    }
})

//route qui permet de déban un utilisateur ou de mettre ban a false
router.post("/unbanUser",role,async(req,res)=>{
    try {
        res.json("bonjour");
        // const idUser = req.params.id;
        // const utilisateur =await User.findById(idUser);
        // if(utilisateur.bannis=== false){
        //     res.json("Cet utilisteur n'est pas bannis.");
        // }
        // utilisateur.bannis = false;
        // await utilisateur.save();
        // res.json("l'utilisateur "+utilisateur.nom+" "+utilisateur.prenom+" a bien été débannis.");
    } catch (error) {
        res.status(500).json(error.message);
    }
})

//modif le post
router.post("/modifPost/:id",role,async(req,res)=>{
    try {
        const post = await Post.findById(req.params.id);
        const modif = req.body;
        post.titre = modif.titre;
        post.description=modif.description;
        await post.save();
        res.json("post modifié");
        
    } catch (error) {
        res.status(500).json(error.message);
    }
})



//sup le post et les messages qui sont dans le post
router.delete("/deletePost/:id",role,async(req,res)=>{
    try {
        const idPost = req.params.id;
        const post = await Post.findById(idPost);
        const messages = await Message.find({idPost:post._id});

        for(var k=0;k<=messages.length-1;k++){
            messages[k].remove();
        }

        await post.remove();
        res.json("Post supprimé.");
    } catch (error) {
        res.status(500).json(error.message);
    }
})

//sup un message
router.delete("/deleteMsg/:id",role,async(req,res)=>{
    try {
        const idMessage = req.params.id;
        const message = await Message.findById(idMessage);
        await message.remove();
        res.json("message supprimé.");
    } catch (error) {
        res.status(500).json(error.message);
    }
})


//recherche d'un utilisateur par son pseudonyme unique pour lui envoyer un message, le signaler ou le ban.
router.post("/rechercheUser",role,async(req,res)=>{
    try {
        const pseudoUser = req.body.pseudonyme;
        const user = await User.findOne({pseudonyme:pseudoUser});
        res.json(user);
    } catch (error) {
        res.status(500).json(error.message);
    }
})

module.exports = router;