const mongoose= require("mongoose");
const signalementPostSchema = mongoose.Schema({
    idPost:{type: mongoose.Schema.Types.ObjectId,require:true,ref:"Post",},
    idUserSignaleur:{type: mongoose.Schema.Types.ObjectId,require:true,ref:"User",},
    idUserSignaler:{type: mongoose.Schema.Types.ObjectId,require:true,ref:"User",}
})

module.exports = mongoose.model("signalementPost",signalementPostSchema);