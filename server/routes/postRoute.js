const { json } = require("express");
const express = require("express");
const router =express.Router();
const auth = require("../middleware/auth");
const Post = require("../model/Post");
const { find } = require("../model/User");
const User = require("../model/User");
const Message =require("../model/MessagePost");
const Categorie = require("../model/Categorie");

//route qui permet de récupérer tous les posts
router.get("/",async(req,res)=>{
    try {
        // const post =await Post.find();
        const post = await Post.find ().sort ( {createdAt: -1} );
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

 //route qui permet de récupérer les posts par catégorie
 router.get("/posteParCategorie/:categorie",async(req,res)=>{
    try {
        const categorie = req.params.categorie;
        //test voir si la catégorie existe
        // const testCategorie = await Categorie.find({titre:categorie});
        
        const allPost =await Post.find({categorie:categorie}).sort({createdAt:-1});
        res.json(allPost);
        
    } catch (error) {
        res.status(500).json(error.message);
    }

 })

 //route qui permet de récupérer les post d'un utilisateur par le pseudo
 router.get("/recherchepostesParPseudo/:pseudoCreateur",async(req,res)=>{
    try {
        const pseudoCreateur = req.params.pseudoCreateur;
        const user =await User.findOne({pseudonyme:pseudoCreateur});
        if(!user){
            return res.status(404).json("L'utilisateur n'existe pas.");
        }
        const posts = await Post.find({pseudoCreateur:pseudoCreateur}).sort({createdAt:-1});
        res.json(posts);
        
    } catch (error) {
        res.status(500).json(error.message);
    }

 })

 //route qui permet de récupérer les post par une recherche de mot 
 router.get("/recherchepostesParmot/:mot",async(req,res)=>{
    try {
        const mot = req.params.mot;
        const posts = await Post.find({titre:{$regex:mot}}).sort({createdAt:-1});
        if(posts.length===0){
            return res.status(404).json("ne correspond à aucun post");
        }
        res.json(posts);
        
    } catch (error) {
        res.status(500).json(error.message);
    }

 })


 
//route qui permet de créer un post
router.post("/creerPost",auth,async(req,res)=>{
   try {
    const user = req.payload.id;
    if(!user){
        return res.json("vous devez être connecté pour créer un post");
    }
    if(user.bannis){
       return res.json("vous êtes bannis, vous ne pouvez pas créer de psot");
    }
    var now = new Date();
    const annee=now.getFullYear();
    const mois=now.getMonth() + 1;
    const jour=now.getDate();
    const heure=now.getHours();
    const minute=now.getMinutes();
    const seconde=now.getSeconds();
    
    const dateCreation = ""+jour+"/"+mois+"/"+annee+"";
    const heureCreation = ""+heure+":"+minute+":"+seconde+"";

    //ajout du post dans categorie pour avoir le nombre de post par categorie
    const categorie = await Categorie.findOne({titre:req.body.categorie});
    if(!categorie){
        return res.json("la catégorie n'existe pas");
    }
    categorie.nombrePost +=1;
    await categorie.save();
    
    const tab = await User.find({_id : user});
    const post = new Post({
        "categorie":req.body.categorie,
        "titre":req.body.titre,
        "idUser":user,
        "prenomCreateur": tab[0].prenom,
        "nomCreateur" : tab[0].nom,
        "pseudoCreateur" : tab[0].pseudonyme,
        "dateCreation":dateCreation,
        "heureCreation" : heureCreation,
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

        // nombre de post de cette catégorie passe à total -1 
        const categorie = await Categorie.findOne({titre:post.categorie});
        categorie.nombrePost -=1;
        await categorie.save();

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