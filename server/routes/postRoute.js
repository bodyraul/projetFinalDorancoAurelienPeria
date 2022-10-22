const { json } = require("express");
const express = require("express");
const router =express.Router();
const auth = require("../middleware/auth");
const Post = require("../model/Post");
const { find } = require("../model/User");
const User = require("../model/User");
const Message =require("../model/MessagePost");

//route qui permet de récupérer tous les posts
router.get("/",async(req,res)=>{
    try {
        const post =await Post.find();
        res.json(post);
        
    } catch (error) {
        res.status(500).json(error.message);
    }
 });



  //route qui permet d'accéder à ses propres postes
  router.get("/accesPost",auth,async(req,res)=>{
    try {
        const idUser = req.payload.id;
        if(!idUser){
            return res.json("Vous devez être connecté pour accéder à vos posts");
        }
        const postUser = await Post.find({idUser:idUser});
        res.json(postUser);
    } catch (error) {
        res.status(500).json(error.message);
    }

 })

//route qui permet de récupérer un post pour le modifier ou supprimer
 router.get("/monPoste/:id",auth,async(req,res)=>{
    try {
        const idUser = req.payload.id;
        if(!idUser){
            return res.json("Vous devez être connecté pour acceder à l'un de vos posts");
        }
        const idPost = req.params.id;
        const post =await Post.findOne({_id:idPost});
        if(post.idUser != idUser){
            return res.status(404).json("Vous ne pouvez pas acceder un post qui ne vous appartient pas");
        }
        res.json(post);
        
    } catch (error) {
        res.status(500).json(error.message);
    }

 })

 
//route qui permet de créer un post
router.post("/creerPost",auth,async(req,res)=>{
   try {
    const user = req.payload.id;
    if(!user){
        res.json("vous devez être connecté pour créer un post");
    }
    const tab = await User.find({_id : user});
    const post = new Post({
        "titre":req.body.titre,
        "description":req.body.description,
        "idUser":user,
        "prenomCreateur": tab[0].prenom,
        "nomCreateur" : tab[0].nom,
        "pseudoCreateur" : tab[0].pseudonyme,
    })
    
    await post.save();    
    res.status(201).json(post);
   } catch (error) {
        res.status(500).json(error.message);
   }
});

//permet de modifier son propre poste
router.put("/modifierPost/:id",auth,async(req,res)=>{
    try {
        const idUser = req.payload.id;
        if(!idUser){
            return res.json("Vous devez être connecté pour modifier l'un de vos posts");
        }
        const idPost = req.params.id;
        const post =await Post.findOne({_id:idPost});
        if(post.idUser != idUser){
            return res.status(404).json("Vous ne pouvez pas modifier un post qui ne vous appartient pas");
        }
        post.titre=req.body.titre;
        post.description=req.body.description;
        await post.save();
        res.json("Votre post a bien été modifié");
    } catch (error) {
        res.status(500).json(error.message);
    }
})

//permet de supprimer son propre poste et les messages qui vont avec
router.delete("/supprimerPost/:id",auth,async(req,res)=>{
    try {
        const user = req.payload.id;

        if(!user){
            res.status(404).json("Vous devez être connecté pour supprimer une annonce.");
        }

        const idPost = req.params.id;
        const post = await Post.findById(idPost);

        if(post.idUser!=user){
            return res.status(404).json("Vous ne pouvez pas supprimer un post qui ne vous appartient pas");
        }

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


module.exports = router;