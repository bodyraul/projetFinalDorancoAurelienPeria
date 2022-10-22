const express = require("express");
const router =express.Router();
const User = require("../model/User");
const bcrypt =require("bcrypt");
const jwt = require("jsonwebtoken");

//route qui permet de créer un compte
router.post("/register",async(req,res)=>{
    try {
        const user = new User({
            prenom:req.body.prenom,
            pseudonyme:req.body.pseudonyme,
            nom : req.body.nom,
            email : req.body.email,
            password : req.body.password,
            role: req.body.role,
            bannis : req.body.bannis,
        });
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (error) {
        
        const mail = await User.find().where("email").equals(req.body.email);
        const pseudonyme  = await User.find().where("pseudonyme").equals(req.body.pseudonyme);
        if(mail.length && pseudonyme.length){
            return res.status(400).json(`L'email et le pseudonyme existent déjà`);
        }
        if(mail.length){
            return res.status(400).json(`L'email existe deja`);
        }
        if(pseudonyme.length){
            return res.status(400).json("le pseudonyme est déjà utilisé");
        }
        res.status(500).json(error);
    }
    
}); 

//route qui permet de se connecter
router.post("/login",async(req,res)=>{
    try {
        const user = await User.findOne({email : req.body.email});
        if(user.bannis === true){
            return  res.status(401).json("Vous avez été bannis, vous ne pouvez plus vous connecter,créer de post ou de message.")
        }
        if(!user){
            return res.status(400).json("Adresse mail ou mot de passe incorrect");
        }
        
        const matchMpw = await bcrypt.compare(req.body.password, user.password);

        if(!matchMpw){
            return res.status(400).json("Adresse mail ou mot de passe incorrect");
        }
        const token = jwt.sign({id: user._id,role:user.role,bannis:user.bannis}, "aurelien");
        res.json(token);

    } catch (error) {
        res.status(500).json(error.message);
    }
    
});

module.exports= router;