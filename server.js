var appRoot = __dirname,
    express = require("express"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    methodOverride = require("method-override"),
    Book = require("./models/book"),
    path = require("path");

// Create server    
var app = express(),
    site = path.join(appRoot, "site"),
    port = process.env.PORT || 8080;


//Connect to database
mongoose.connection.on('open', function (ref) {
    console.log('Connected to mongo server.');
});
mongoose.connection.on('error', function (err) {
    console.log('Could not connect to mongo server!');
    console.log(err);
});
mongoose.connect("mongodb://idasbiste:backboneidasbiste@ds019946.mlab.com:19946/backbonedb");    


// Configure server
// parses request body and populates request.body
app.use(bodyParser.urlencoded({
    extended: true
}));

// checks request.body for HTTP method overrides
app.use(methodOverride("_method"));

// Where to serve static content
app.use(express.static(site));

app.use("/api/books", require("./routes/book"));

app.listen(port, function () {
    console.log('Express server listening on port %d in %s mode.', port, app.settings.env);
    console.log('At ' + site);
});