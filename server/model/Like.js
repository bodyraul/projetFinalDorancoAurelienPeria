const mongoose = require("mongoose");

const likeSChema = new mongoose.Schema({
    idMessage:{type: mongoose.Schema.Types.ObjectId,require:true,ref:"MessagePost",},
    idUserlikeur:{type: mongoose.Schema.Types.ObjectId,require:true,ref:"User",},
    idPost:{type: mongoose.Schema.Types.ObjectId,require:true,ref:"Post",},
    nom:{type:String}
},);


module.exports = mongoose.model("Like",likeSChema);