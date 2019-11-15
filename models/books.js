var mongoose=require("mongoose");
var Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost/got",{ useNewUrlParser: true })

var book_Schema = new Schema({
    url:String,
    name:String,
    isbn:String,
    authors:[{String}],
    numberOfPages:Number,
    publisher:String,
    country:String,
    mediaType:String,
    released:String,
    characters:[{String}],
    povCharacters:[{String}]
})

var Book = mongoose.model("Book",book_Schema);

module.exports.Book=Book;