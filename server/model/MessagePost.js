const mongoose = require("mongoose");

const messageSChema = new mongoose.Schema({
    idUser:{type: mongoose.Schema.Types.ObjectId,require:true,ref:"User",},
    idPost:{type: mongoose.Schema.Types.ObjectId,require:true,ref:"Post",},
    contenu : {type:String,require:true},
    signalement:{type:Boolean,require:true,default:false},
    traiter:{type:Boolean,require:true,default:false},
    nomCreateurMessage : {type:String,require:true},
    prenomCreateurMessage : {type:String,require:true},
    pseudoCreateurMessage : {type:String,require:true},
},
{
    timestamps:true,
}
);


module.exports = mongoose.model("MessagePost",messageSChema);