const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    nom : {type:String, require:true},
    prenom : {type:String, require:true},
    pseudonyme : {type:String, require:true,unique:true},
    email : {type:String, require:true, unique :true},
    password : {type:String, require:true},
    role : {type:String,require:true,default:"utilisateur"},
    bannis :{type:Boolean,require:true,default:false},
    },
    {
        timestamps:true,
    }
);

userSchema.pre("save",function(){
    console.log("pre save");
    if(this.isModified("password")){
        this.password = bcrypt.hashSync(this.password,10);
    }
});

module.exports=mongoose.model("User",userSchema);