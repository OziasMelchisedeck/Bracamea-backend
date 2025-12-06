const mongoose =require('mongoose');

const articleSchema = mongoose.Schema({
    genre:{type: String, required:true},
    type:{type:String, required:true},
    modele:{type:String, required:true},
    prix:{type:Number},
    taille: {type: [String]},
    pointure: {type: [String]},
    note:{type:Number, required:true},
    path:{type:String, required:true},
});

module.exports = mongoose.model('Article', articleSchema);