const mongoose = require("mongoose");

const categorieSChema = new mongoose.Schema({
    titre : {type:String,require:true,unique:true},
    contenu : {type:String,require:true},
    nombrePost : {type:Number,require:true,default:0},
},
{
    timestamps:true,
}
);


module.exports = mongoose.model("Categorie",categorieSChema);