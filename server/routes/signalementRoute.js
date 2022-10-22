const express = require("express");
const router =express.Router();
const auth = require("../middleware/auth");
const Post =require("../model/Post");
const Message = require("../model/MessagePost");
const User = require("../model/User");
const SignalementMessage = require("../model/SignalementMessage");
const SignalementPost = require("../model/SignalementPost");
const MessagePost = require("../model/MessagePost");
const role = require("../middleware/role");


// Permet à un utilisateur connecté de signaler un message
router.post("/signalementMessage/:id",auth,async(req,res)=>{
    try {
        if(!req.payload.id){
            res.json("vous devez être connecté pour signaler un message.");
        }
        const idMessage = req.params.id;
        const message =await Message.findOne({_id:idMessage});
        if(!message){
            return res.json("Le message que vous essayer de signaler n'existe pas.")
        }
        if(message.traiter===true){
            return res.json("ce message a été traité vous ne pouvez plus le signaler");
        }
        
        const idUserSignaleur = req.payload.id;
        var verifDejaSignalement=false;
        const nbSignalementMsg =await SignalementMessage.find({
            idMessage:idMessage
        })
        nbSignalementMsg.forEach(element => {
            if(element.idUserSignaleur==req.payload.id){
               return verifDejaSignalement=true;
            }
          
        });
        //on vérifie si l'utilisateur qui signale l'a déjà fait ou non
        if(verifDejaSignalement){
            return res.json("vous avez déjà signalé ce message.");
        }
        const idUserSignaler = message.idUser;
        const signaler = true;
        const newSignalement = new SignalementMessage({
            "idMessage" : idMessage,
            "idUserSignaleur" : idUserSignaleur,
            "idUserSignaler" : idUserSignaler,
            "signaler" : signaler,
        })
        await newSignalement.save();
        message.signalement=true;
        await message.save();
        res.json("Le message a bien été signalé.");
    } catch (error) {
        res.status(500).json(error.message);
    }

})

// Permet à un utilisateur connecté de signaler un post
router.post("/signalementPost/:id",auth,async(req,res)=>{
    try {
        if(!req.payload.id){
            res.json("vous devez être connecté pour signaler un message.");
        }
        const idPost = req.params.id;
        const post =await Post.findOne({_id:idPost});
        if(!post){
            return res.json("le post que vous essayer de signaler n'existe pas.")
        }
        if(post.traiter===true){
            return res.json("ce post a été traité vous ne pouvez plus le signaler");
        }
        const idUserSignaleur = req.payload.id;
        var verifDejaSignalement=false;
        const nbSignalementPost =await SignalementPost.find({
            idMessage:idPost
        })
        nbSignalementPost.forEach(element => {
            if(element.idUserSignaleur==req.payload.id){
               return verifDejaSignalement=true;
            }
          
        });
        // on vérifie si l'utilisateur qui singale l'a déjà fait ou non
        if(verifDejaSignalement){
            return res.json("vous avez déjà signalé ce Post.");
        }
        const idUserSignaler = post.idUser;
        const signaler = true;
        const newSignalement = new SignalementPost({
            "idPost" : idPost,
            "idUserSignaleur" : idUserSignaleur,
            "idUserSignaler" : idUserSignaler,
            "signaler" : signaler,
        })
        await newSignalement.save();
        post.signalement=true;
        await post.save();
        res.json("Le Post a bien été signalé.");
    } catch (error) {
        res.status(500).json(error.message);
    }

})

// Permet à un admin de recevoir le nombre d'alertes de signalement d'un message. si ce message est signalé plusieurs fois il
//ne reçevera qu'une alerte mais avec le nombre de fois ou il a été signalé.


//route qui permet de savoir combien de message on été signalé
//en enlevant les doublons
router.get("/nombreMessageSignaler",role,async(req,res)=>{
    try {
        const allSignalement = await SignalementMessage.find();
        const allSignalementChaineCharactere = [];
        for(k=0;k<=allSignalement.length-1;k++){
            allSignalementChaineCharactere.push(`${allSignalement[k].idMessage}`);
        }
        const signalementSansDoublons = allSignalementChaineCharactere.filter(function(ele , pos){
            return allSignalementChaineCharactere.indexOf(ele) == pos;
        }) 
        const decompteSignalement = signalementSansDoublons.length;
        res.json(decompteSignalement);
    } catch (error) {
        res.status(500).json(error.message);
    }
})

//route qui permet de savoir combien de Post on été signalé
//en enlevant les doublons
router.get("/nombrePostSignaler",role,async(req,res)=>{
    try {
        const allSignalement = await SignalementPost.find();
        const allSignalementChaineCharactere = [];
        for(k=0;k<=allSignalement.length-1;k++){
            allSignalementChaineCharactere.push(`${allSignalement[k].idPost}`);
        }
        const signalementSansDoublons = allSignalementChaineCharactere.filter(function(ele , pos){
            return allSignalementChaineCharactere.indexOf(ele) == pos;
        }) 
        const decompteSignalement = signalementSansDoublons.length;
        res.json(decompteSignalement);
    } catch (error) {
        res.status(500).json(error.message);
    }
})

// route qui permet de savoir combien de fois un message a été signalé
router.get("/nbFoisMsgSignaler/:id",role,async(req,res)=>{
    try {
        const idMessage = req.params.id;
        const nbFoisMsgSignaler =await SignalementMessage.find({idMessage:idMessage}).count();
        res.json(nbFoisMsgSignaler);
    } catch (error) {
        res.status(500).json(error.message);
    }
})


// route qui permet de savoir combien de fois un post a été signalé
router.get("/nbFoisPostSignaler/:id",role,async(req,res)=>{
    try {
        const idPost = req.params.id;
        const nbFoisPostSignaler =await SignalementPost.find({idPost:idPost}).count();
        res.json(nbFoisPostSignaler);
    } catch (error) {
        res.status(500).json(error.message);
    }
})


//route qui permet d'afficher les messages signalés
router.get("/afficherMsgSignaler",role,async(req,res)=>{
    try {
        const allMsgSignaler = await MessagePost.find({signalement:true});
        if(allMsgSignaler.length===0){
           return res.status(404).json("Aucun message n'a été signalé pour le moment.");
        }
        res.json(allMsgSignaler);
    } catch (error) {
        res.status(500).json(error.message);
    }
})


//route qui permet d'afficher les posts signalés
router.get("/afficherPostSignaler",role,async(req,res)=>{
    try {
        const allPostSignaler = await Post.find({signalement:true});
        if(allPostSignaler.length===0){
            return res.status(404).json("Aucun post n'a été signalé pour le moment.");
         }
        res.json(allPostSignaler);
    } catch (error) {
        res.status(500).json(error.message);
    }
})

//route qui permet d'afficher un seul msg signalé
router.get("/afficherMsgSignaler/:id",role,async(req,res)=>{
    try {
        const idMessage= req.params.id;
        //vérification que l'id du message existe
        if(!idMessage){
            return res.json("ce message n'existe pas");
        }
        // verification que l'id du message est bien signalé
        const allSignalementMsg = await SignalementMessage.find();
        var teste = false;
        allSignalementMsg.forEach(element => {
            if(element.idMessage==idMessage){
                return teste=true;
            }
           
        });
        if(teste === false){
            return res.json("Ce message n'a pas été signalé.")
        }
        const message = await MessagePost.findById(idMessage);
        res.json(message);
    } catch (error) {
        res.status(500).json(error.message);
    }
})

//route qui permet d'afficher un seul post signalé
router.get("/afficherPostSignaler/:id",role,async(req,res)=>{
    try {
        const idPost= req.params.id;
        if(!idPost){
            return res.json("ce post n'existe pas ");
        }
         // verification que l'id du post est bien signalé
         const allSignalementPost = await SignalementPost.find();
         var teste = false;
         allSignalementPost.forEach(element => {
             if(element.idPost==idPost){
                 return teste=true;
             }
            
         });
         if(teste === false){
             return res.json("Ce post n'a pas été signalé.")
         }
        const message = await Post.findById(idPost);
        res.json(message);
    } catch (error) {
        res.status(500).json(error.message);
    }
})

//route qui permet de supprimer  les signalement d'un message lorsqu'il a été traité et de mettre signalement à false s'il n'y a plus 
//de signalement sur ce message

router.delete("/supprimerSignalementMsg/:id",role,async(req,res)=>{
    try {
        const idMessage= req.params.id;
        const listSignalementMsg = await SignalementMessage.find({idMessage:idMessage});
        if(listSignalementMsg.length===0){
            return res.json("Il n'y a aucun signalement pour ce message");
        }
        listSignalementMsg.forEach(async element =>await element.remove());
        const message = await MessagePost.findById(idMessage);
        message.signalement=false;
        message.traiter=true;
        await message.save();
        res.json("signalements supprimés");
    } catch (error) {
        res.status(500).json(error.message);
    }
})

//route qui permet de supprimer  les signalement d'un post lorsqu'il a été traité et de mettre signalement à false s'il n'y a plus 
//de signalement sur ce message

router.delete("/supprimerSignalementPost/:id",role,async(req,res)=>{
    try {
        const idPost= req.params.id;
        const listSignalementPost = await SignalementPost.find({idPost:idPost});
        console.log(listSignalementPost);
        if(listSignalementPost.length===0){
            return res.json("Il n'y a aucun signalement pour ce post");
        }
        listSignalementPost.forEach(async element =>await element.remove());
        const post = await Post.findById(idPost);
        console.log(post);
        post.signalement=false;
        post.traiter=true;
        await post.save();
        res.json("signalements supprimés");
    } catch (error) {
        res.status(500).json(error.message);
    }
})





module.exports = router;

