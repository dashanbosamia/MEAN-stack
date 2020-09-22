
var bookSchema = require('./model/bookdb')
const { update } = require('./model/bookdb')

module.exports = {
    add: addBooks,
    get: getBook,
    delete: deleteBook,
    get_id: getBookid,
    update: updateBookByid
}
function addBooks(req, res) {
    try{
    if (req.body.name && req.body.author) {
        var obj = {
            name: req.body.name,
            author: req.body.author
        }
        var findObj ={
            name: req.body.name
        }

      bookSchema.findOne(findObj , function(err,data){
          console.log("what is data",data)
          if(data){
            res.json({ code: 401, message: "Book Name already exist" })
          }
          else{
            var record = new bookSchema(obj);
            console.log("kio", record)
            record.save(function (err, data) {
                console.log("check")
                if (err) {
                    res.json({ code: 400, message: "Something went  wrong" })
                } else {
                    res.json({ code: 200, message: "Book Added", data: data })
                }
            })
          }
      })
    }
    else {
        res.json({ code: 400, message: "Check Body" })
    }
}catch(err){
    res.json({ code: 501, err })
}
}

function getBook(req, res) {
    bookSchema.find(function (err, data) {
        if (err) {
            res.json({ code: 400, message: "Something went  wrong" })
        } else {
            res.json({ code: 200, message: "Book Fetched suceess", data: data })
        }
    })
}


function deleteBook(req, res) {
    console.log("req", req.params)
    var idfrompostman = req.params.id
    bookSchema.findByIdAndRemove({ _id: idfrompostman }, function (err, data) {
        if (err) {
            res.json({ code: 400, message: "Something went  wrong" })
        } else {
            res.json({ code: 200, message: "Book deleted successfully" })
        }
    })
}

function getBookid(req, res) {
    console.log("req", req.params)
    var idfrompostman = req.params.id
    bookSchema.findById({ _id: idfrompostman }, function (err, result) {
        if (err) {
            res.json({ code: 400, message: "Something went  wrong" })
        } else {
            res.json({ code: 200, message: "Book fetched successfully", data: result })
        }
    })
}

function updateBookByid(req, res) {
    console.log("req", req.params)
    if (req.body.name && req.body.author) {
        var obj = {
            name: req.body.name,
            author: req.body.author
        }
        var idfrompostman = req.params.id
        bookSchema.update({ _id: idfrompostman }, obj, function (err, result) {
            if (err) {
                res.json({ code: 400, message: "Something went  wrong" })
            } else {
                res.json({ code: 200, message: "Book book successfully", data: result })
            }
        })
    }
    else {
        res.json({ code: 400, message: "Check Body" })
    }
}
