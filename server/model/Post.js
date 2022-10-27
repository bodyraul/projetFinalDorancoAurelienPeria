const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    categorie:{type:String,require:true},
    titre:{type:String,require:true},
    signalement:{type:Boolean,require:true,default:false},
    traiter:{type:Boolean,require:true,default:false},
    prenomCreateur : {type:String,require:true},
    nomCreateur : {type:String,require:true},
    pseudoCreateur : {type:String,require:true},
    idUser:{type: mongoose.Schema.Types.ObjectId,require:true,ref:"User",},
    nombreMessages : {type:Number,default:0},
    heureCreation : {type:String,require:true},
    dateCreation : {type:String,require:true},
},
{
    timestamps:true,
}
);


module.exports = mongoose.model("Post",postSchema);