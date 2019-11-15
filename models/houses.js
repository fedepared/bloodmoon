var mongoose=require("moongose");
var Schema=mongoose.Schema;
mongoose.conect("mongodb://localhost/got",{ useNewUrlParser: true });

var house_schema= new Schema({
    url:String,
    name:String,
    region:String,
    coatOfArms:String,
    words:String,
    titles:[{type:String}],
    seats:[{type:String}],
    currentLord:String,
    heir:String,
    overlord:String,
    founded:String,
    founder:String,
    diedOut:String,
    ancestralWeapons:[{type:String}],
    cadetBranches:[{type:String}],
    swornMembers:[{type:String}],
})

var Houses = mongoose.model("House",house_schema);

module.exports.Houses = Houses;