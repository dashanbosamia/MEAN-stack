const mongoose = require('mongoose');

require("../controller/model/bookdb")
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/testing');
var db = mongoose.connection;
console.log("db")
db.on('error', console.error.bind(console, "connection failed"));
db.once('open', function () {
	console.log("Database conencted successfully!");
});
 