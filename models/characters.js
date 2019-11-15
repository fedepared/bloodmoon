var mongoose = require("mongoose");

//asi no tengo que hacer mongoose.Schema cada vez que la utilice
var Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost/got",{ useNewUrlParser: true });



var  characters_schema = new Schema({
    url:String,
    gender:String,
    culture:String,
    born:String,
    died:String,
    titles: [{type:String}],
    aliases:[{type:String}],
    father:String,
    mother:String,
    spouse:String,
    allegiances:[{type:String}],
    books:[{type:String}],
    povBooks:[{type:String}],
    tvSeries:[{type:String}],
    playedBy:[{type:String}],
})

var Characters=mongoose.model("Character",characters_schema);

module.exports.Characters=Characters;