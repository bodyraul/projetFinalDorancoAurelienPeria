const mongoose =require('mongoose');

const signalementMessageSchema = mongoose.Schema({
    idMessage:{type: mongoose.Schema.Types.ObjectId,require:true,ref:"MessagePost",},
    idUserSignaleur:{type: mongoose.Schema.Types.ObjectId,require:true,ref:"User",},
    idUserSignaler:{type: mongoose.Schema.Types.ObjectId,require:true,ref:"User",},
    idPost:{type: mongoose.Schema.Types.ObjectId,require:true,ref:"Post",}
})

module.exports = mongoose.model("signalementMessage",signalementMessageSchema);