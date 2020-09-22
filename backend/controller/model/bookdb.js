var mongoose = require('mongoose');


var booksSchema =new mongoose.Schema({
    name : {type:String},
    author : {type :String}
},{
    timestamps :true
})

module.exports =mongoose.model('book',booksSchema)